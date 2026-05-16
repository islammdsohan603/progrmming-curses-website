import CoursesContainer from "@/comonentes/Coursescontainer";
import { getData } from "@/db/data";
import {
  BadgeCheck,
  BookOpenCheck,
  Layers,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const CoursesPage = async () => {
  const data = await getData();
  const courses = Array.isArray(data) ? data : [];
  const categories = [...new Set(courses.map((course) => course.category))];
  const levels = [...new Set(courses.map((course) => course.level))];
  const totalStudents = courses.reduce(
    (total, course) => total + (Number(course.students) || 0),
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
                <Sparkles className="size-4" />
                লাইভ ব্যাচ ও প্রজেক্ট-বেইজড লার্নিং
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                আমাদের সকল কোর্সসমূহ
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                আপনার পছন্দের ক্যারিয়ার গড়তে আজই এনরোল করুন। প্রতিটি কোর্সে
                আছে রিয়েল প্রজেক্ট, মেন্টর সাপোর্ট এবং ক্যারিয়ার গাইডলাইন।
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
              <StatCard icon={BookOpenCheck} value={courses.length} label="কোর্স" />
              <StatCard icon={Users} value={`${totalStudents}+`} label="লার্নার" />
              <StatCard icon={Star} value="4.8" label="এভারেজ রেটিং" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-5 text-blue-600" />
                <h2 className="font-black text-slate-950">ফিল্টার</h2>
              </div>

              <label className="mt-5 block text-sm font-bold text-slate-700">
                কোর্স সাজান
              </label>
              <select
                defaultValue="all"
                className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                <option value="all">সব কোর্স</option>
                <option value="new">নতুন</option>
                <option value="trending">ট্রেন্ডিং</option>
                <option value="top">টপ রেটেড</option>
              </select>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Layers className="size-5 text-emerald-600" />
                <h2 className="font-black text-slate-950">ক্যাটাগরি</h2>
              </div>
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
                  >
                    <span className="font-semibold text-slate-700">
                      {category}
                    </span>
                    <span className="rounded-lg bg-white px-2 py-1 text-xs font-black text-blue-700 ring-1 ring-slate-200">
                      {
                        courses.filter((course) => course.category === category)
                          .length
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
              <BadgeCheck className="size-7 text-emerald-400" />
              <h2 className="mt-4 text-lg font-black">আপনার লেভেল অনুযায়ী</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {levels.map((level) => (
                  <span
                    key={level}
                    className="rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-slate-100 ring-1 ring-white/10"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <CoursesContainer data={courses} />
          </section>
        </div>
      </section>
    </main>
  );
};

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <Icon className="size-5 text-blue-600" />
      <p className="mt-3 text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}

export default CoursesPage;
