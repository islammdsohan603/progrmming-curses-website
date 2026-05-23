import { getDetailsData } from '@/db/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  PlayCircle,
  ShoppingCart,
  Star,
  Tag,
  UserRound,
  Users,
} from 'lucide-react';
import AddtoButtons from '@/comonentes/AddtoButtons';

export const dynamic = 'force-dynamic';

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getDetailsData(id);
  if (!data) {
    notFound();
  }

  const features = data.features ?? [];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-800"
        >
          <ArrowLeft className="size-4" />
          কোর্সে ফিরে যান
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image
                src={data.image}
                alt={data.title}
                fill
                priority
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-black text-blue-700 shadow-sm backdrop-blur">
                <BadgeCheck className="size-4" />
                {data.level}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-black text-blue-700 ring-1 ring-blue-100">
                  {data.category}
                </span>
                <span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 ring-1 ring-emerald-100">
                  {data.framework}
                </span>
                <span className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-black text-amber-700 ring-1 ring-amber-100">
                  {data.language}
                </span>
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                {data.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {data.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard
                  icon={Clock3}
                  label="Duration"
                  value={data.duration}
                />
                <InfoCard icon={Star} label="Rating" value={data.rating} />
                <InfoCard icon={Users} label="Students" value={data.students} />
                <InfoCard
                  icon={UserRound}
                  label="Instructor"
                  value={data.instructor}
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="size-5 text-blue-600" />
                  <h2 className="text-2xl font-black text-slate-950">
                    এই কোর্সে যা শিখবেন
                  </h2>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {features.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
                      <span className="font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold text-slate-300">Course Price</p>
                <h2 className="mt-2 text-4xl font-black">${data.price}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  একবার enroll করলে course materials ও updates access পাবেন।
                </p>
              </div>

              <div className="mt-5 grid gap-3">
                <div>
                  <AddtoButtons data={data} />
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  <PlayCircle className="size-4" />
                  Preview Course
                </button>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                <SidebarRow
                  icon={CalendarDays}
                  label="Batch"
                  value="Live + Recorded"
                />
                <SidebarRow
                  icon={GraduationCap}
                  label="Level"
                  value={data.level}
                />
                <SidebarRow
                  icon={Globe2}
                  label="Language"
                  value={data.language}
                />
                <SidebarRow icon={Tag} label="Category" value={data.category} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <Icon className="size-5 text-blue-600" />
      <p className="mt-3 text-xs font-black uppercase text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-black text-slate-950">{value}</p>
    </div>
  );
}

function SidebarRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="inline-flex items-center gap-2 font-semibold text-slate-500">
        <Icon className="size-4 text-blue-600" />
        {label}
      </span>
      <span className="text-right font-black text-slate-800">{value}</span>
    </div>
  );
}

export default DetailsPage;
