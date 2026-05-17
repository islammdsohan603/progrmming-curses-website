import CoursesContainer from "@/comonentes/Coursescontainer";
import { getData } from "@/db/data";
import {
  BookOpenCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const CoursesPage = async () => {
  const data = await getData();
  const courses = Array.isArray(data) ? data : [];
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

        <CoursesContainer data={courses} />
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
