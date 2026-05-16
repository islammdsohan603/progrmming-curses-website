"use client";

import { useState } from "react";
import CursorCard from "@/comonentes/CursorCard";
import { ArrowLeft, ArrowRight, BookOpenCheck } from "lucide-react";

const CoursesContainer = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-blue-700">Available Courses</p>
          <h2 className="mt-1 text-xl font-black text-slate-950">
            {data.length}টি কোর্স পাওয়া গেছে
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
            কিছুক্ষণ পর আবার চেষ্টা করুন।
          </p>
        </div>
      )}

      {data.length > itemsPerPage && (
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
    </div>
  );
};

export default CoursesContainer;
