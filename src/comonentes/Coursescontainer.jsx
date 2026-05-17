"use client";

import { useMemo, useState } from "react";
import CursorCard from "@/comonentes/CursorCard";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Layers,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

const sortOptions = [
  { value: "all", label: "সব কোর্স" },
  { value: "new", label: "নতুন" },
  { value: "trending", label: "ট্রেন্ডিং" },
  { value: "top", label: "টপ রেটেড" },
  { value: "priceLow", label: "কম দাম" },
  { value: "priceHigh", label: "বেশি দাম" },
];

const CoursesContainer = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 6;

  const categories = useMemo(
    () => [...new Set(data.map((course) => course.category).filter(Boolean))],
    [data]
  );

  const levels = useMemo(
    () => [...new Set(data.map((course) => course.level).filter(Boolean))],
    [data]
  );

  const filteredData = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const result = data.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;
      const searchableText = [
        course.title,
        course.category,
        course.level,
        course.language,
        course.framework,
        course.instructor,
        ...(course.features || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch =
        !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesLevel && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sortBy === "new") {
        return String(b._id).localeCompare(String(a._id));
      }
      if (sortBy === "trending") {
        return (Number(b.students) || 0) - (Number(a.students) || 0);
      }
      if (sortBy === "top") {
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      }
      if (sortBy === "priceLow") {
        return (Number(a.price) || 0) - (Number(b.price) || 0);
      }
      if (sortBy === "priceHigh") {
        return (Number(b.price) || 0) - (Number(a.price) || 0);
      }

      return 0;
    });
  }, [data, searchTerm, selectedCategory, selectedLevel, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  const hasActiveFilters =
    sortBy !== "all" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    searchTerm.trim().length > 0;

  const resetFilters = () => {
    setSortBy("all");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-5 text-blue-600" />
            <h2 className="font-black text-slate-950">ফিল্টার</h2>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            কোর্স সার্চ করুন
          </label>
          <div className="mt-2 flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
            <Search className="size-4 text-slate-400" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="React, Backend..."
              className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            কোর্স সাজান
          </label>
          <select
            value={sortBy}
            onChange={(event) => {
              setSortBy(event.target.value);
              setCurrentPage(1);
            }}
            className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              <X className="size-4" />
              ফিল্টার রিসেট
            </button>
          )}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Layers className="size-5 text-emerald-600" />
            <h2 className="font-black text-slate-950">ক্যাটাগরি</h2>
          </div>
          <div className="mt-4 space-y-2">
            <FilterButton
              label="সব ক্যাটাগরি"
              count={data.length}
              isActive={selectedCategory === "all"}
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
            />
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                count={
                  data.filter((course) => course.category === category).length
                }
                isActive={selectedCategory === category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
          <BadgeCheck className="size-7 text-emerald-400" />
          <h2 className="mt-4 text-lg font-black">আপনার লেভেল অনুযায়ী</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <LevelButton
              label="All"
              isActive={selectedLevel === "all"}
              onClick={() => {
                setSelectedLevel("all");
                setCurrentPage(1);
              }}
            />
            {levels.map((level) => (
              <LevelButton
                key={level}
                label={level}
                isActive={selectedLevel === level}
                onClick={() => {
                  setSelectedLevel(level);
                  setCurrentPage(1);
                }}
              />
            ))}
          </div>
        </div>
      </aside>

      <section className="min-w-0">
        <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-blue-700">
              Available Courses
            </p>
            <h2 className="mt-1 text-xl font-black text-slate-950">
              {filteredData.length}টি কোর্স পাওয়া গেছে
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
            <BookOpenCheck className="size-4" />
            প্রজেক্ট সহ শেখা
          </div>
        </div>

        {currentData.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {currentData.map((course) => (
              <CursorCard key={course._id} cursoeItem={course} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-lg font-black text-slate-950">
              কোনো কোর্স পাওয়া যায়নি
            </p>
            <p className="mt-2 text-sm text-slate-500">
              অন্য category, level অথবা search keyword দিয়ে চেষ্টা করুন।
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              সব কোর্স দেখুন
            </button>
          </div>
        )}

        {filteredData.length > itemsPerPage && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="size-4" />
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;

              return (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`inline-flex size-10 items-center justify-center rounded-lg text-sm font-black transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

function FilterButton({ label, count, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-10 w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
        isActive
          ? "bg-blue-50 text-blue-700 ring-1 ring-blue-100"
          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
      }`}
    >
      <span className="font-semibold">{label}</span>
      <span className="rounded-lg bg-white px-2 py-1 text-xs font-black ring-1 ring-slate-200">
        {count}
      </span>
    </button>
  );
}

function LevelButton({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-3 py-1 text-xs font-bold ring-1 transition ${
        isActive
          ? "bg-white text-slate-950 ring-white"
          : "bg-white/10 text-slate-100 ring-white/10 hover:bg-white/20"
      }`}
    >
      {label}
    </button>
  );
}

export default CoursesContainer;
