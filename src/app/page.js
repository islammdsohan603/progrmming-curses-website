import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  MonitorPlay,
  Palette,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const stats = [
  { value: "১২K+", label: "অ্যাক্টিভ লার্নার" },
  { value: "৪৮+", label: "প্রজেক্ট বেইজড কোর্স" },
  { value: "৮৫%", label: "ক্যারিয়ার সাপোর্ট" },
  { value: "৪.৯/৫", label: "লার্নার রেটিং" },
];

const categories = [
  {
    title: "ওয়েব ডেভেলপমেন্ট",
    meta: "১৮টি কোর্স",
    icon: Code2,
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    title: "মার্ন স্ট্যাক",
    meta: "১২টি কোর্স",
    icon: Database,
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "UI/UX ডিজাইন",
    meta: "৯টি কোর্স",
    icon: Palette,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "প্রোগ্রামিং বেসিক",
    meta: "১৫টি কোর্স",
    icon: FileCode2,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
];

const featuredCourses = [
  {
    title: "Complete Web Development Bootcamp",
    level: "Beginner to Job Ready",
    duration: "৬ মাস",
    lessons: "৮০+ লেসন",
    rating: "৪.৯",
    price: "৳৬,৫০০",
    accent: "bg-blue-600",
    skills: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Frontend Mastery With React",
    level: "Intermediate",
    duration: "৪ মাস",
    lessons: "৫৬+ লেসন",
    rating: "৪.৮",
    price: "৳৪,২০০",
    accent: "bg-emerald-600",
    skills: ["React", "Next.js", "API", "Deploy"],
  },
  {
    title: "UI/UX Design Career Track",
    level: "Design Starter",
    duration: "৩ মাস",
    lessons: "৪০+ লেসন",
    rating: "৪.৭",
    price: "৳৩,৮০০",
    accent: "bg-amber-500",
    skills: ["Figma", "Wireframe", "Design System", "Portfolio"],
  },
];

const learningSteps = [
  {
    title: "লাইভ ক্লাস ও রেকর্ডিং",
    text: "প্রতিটি ব্যাচে লাইভ সেশন, ক্লাস রেকর্ডিং এবং স্পষ্ট মডিউলভিত্তিক শেখার রোডম্যাপ।",
  },
  {
    title: "রিয়েল প্রজেক্ট বিল্ড",
    text: "প্রতিটি স্কিলের শেষে প্রোডাকশন-স্টাইল অ্যাসাইনমেন্ট, কোড রিভিউ এবং ডেপ্লয়মেন্ট।",
  },
  {
    title: "ক্যারিয়ার প্রস্তুতি",
    text: "সিভি, গিটহাব, পোর্টফোলিও, মক ইন্টারভিউ এবং জব সার্চ গাইডলাইন এক জায়গায়।",
  },
];

const mentors = [
  "ইন্ডাস্ট্রি এক্সপার্ট মেন্টর",
  "সাপ্তাহিক লাইভ সাপোর্ট",
  "কমিউনিটি ডিসকাশন",
  "পোর্টফোলিও ফিডব্যাক",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-950">
      <section className="relative isolate">
        <Image
          src="/banner.jpg"
          alt="Programming course workspace"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-slate-950/75" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-slate-50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles className="size-4 text-amber-300" />
              লাইভ ব্যাচ, প্রজেক্ট আর ক্যারিয়ার সাপোর্ট একসাথে
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              EduBangli কোর্স প্ল্যাটফর্ম
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              বাংলা ভাষায় প্র্যাকটিক্যাল টেক স্কিল শিখুন, হাতে-কলমে
              প্রজেক্ট তৈরি করুন এবং মেন্টরদের গাইডলাইনে নিজের ক্যারিয়ার
              রোডম্যাপ তৈরি করুন।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
              >
                কোর্স এক্সপ্লোর করুন
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/mentors"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                <PlayCircle className="size-4" />
                ডেমো ক্লাস দেখুন
              </Link>
            </div>
          </div>

          <div className="mt-12 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
              >
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="-mt-4 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 md:grid-cols-[1fr_auto_auto]">
          <div className="flex min-h-12 items-center gap-3 rounded-lg bg-slate-100 px-4 text-slate-500">
            <Search className="size-5 text-blue-600" />
            <input type="text" name="text" className="text-sm font-medium w-full border-none outline-none" placeholder="React, MERN, UI Design, JavaScript কোর্স খুঁজুন">

            </input>
          </div>
          <Link
            href="/courses"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            সব কোর্স
          </Link>
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            ফ্রি জয়েন
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-blue-600">
              Career Tracks
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              আপনার লক্ষ্য অনুযায়ী ট্র্যাক বেছে নিন
            </h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700"
          >
            সব ক্যাটাগরি দেখুন
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, ...category }) => (
            <Link
              key={category.title}
              href="/courses"
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200"
            >
              <div
                className={`inline-flex size-12 items-center justify-center rounded-lg ring-1 ${category.tone}`}
              >
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">
                {category.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {category.meta}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                শুরু করুন
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-emerald-600">
                Featured Courses
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">
                সবচেয়ে জনপ্রিয় কোর্সগুলো
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              প্রতিটি কোর্সে ক্লাস, প্র্যাকটিস টাস্ক, প্রজেক্ট, মেন্টরশিপ
              এবং ক্যারিয়ার গাইডলাইন সাজানো আছে।
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <article
                key={course.title}
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <div
                  className={`flex h-36 items-start justify-between rounded-lg p-5 text-white ${course.accent}`}
                >
                  <div>
                    <MonitorPlay className="size-8" />
                    <p className="mt-8 text-sm font-bold">{course.level}</p>
                  </div>
                  <div className="rounded-lg bg-white/15 px-3 py-2 text-sm font-black">
                    {course.price}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {course.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="size-4 text-blue-600" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="size-4 text-emerald-600" />
                    {course.lessons}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/courses"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    বিস্তারিত দেখুন
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-rose-600">
            Learning Flow
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            শেখা থেকে পোর্টফোলিও পর্যন্ত পরিষ্কার পথ
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            শুধু ভিডিও দেখাই নয়, প্রতিটি ধাপে কাজ জমা দেওয়া, ফিডব্যাক নেওয়া
            এবং নিজস্ব প্রজেক্ট তৈরি করার অভ্যাস তৈরি হবে।
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: ShieldCheck, text: "গাইডেড রোডম্যাপ" },
              { icon: Users, text: "মেন্টর কমিউনিটি" },
              { icon: Trophy, text: "প্রজেক্ট সার্টিফিকেট" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
              >
                <Icon className="size-5 text-blue-600" />
                <span className="font-bold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {learningSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[auto_1fr]"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-500">
              <GraduationCap className="size-7" />
            </div>
            <h2 className="mt-5 text-3xl font-black">
              মেন্টরশিপের সাথে শেখা আরও সহজ
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              কোর্স চলাকালীন প্রশ্ন, অ্যাসাইনমেন্ট, কোড রিভিউ এবং ক্যারিয়ার
              প্রস্তুতিতে মেন্টররা নিয়মিত পাশে থাকবে।
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {mentors.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 className="size-5 text-emerald-400" />
                <span className="font-bold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-blue-100 bg-blue-50 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
              <BriefcaseBusiness className="size-4" />
              নতুন ব্যাচ শুরু হচ্ছে
            </div>
            <h2 className="text-3xl font-black text-slate-950">
              আজ থেকেই নিজের স্কিল আপগ্রেড করুন
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              আপনার জন্য উপযুক্ত কোর্স বেছে নিয়ে লাইভ ব্যাচে জয়েন করুন।
              শেখার গতি, প্রজেক্ট আর সাপোর্ট এক জায়গায়।
            </p>
          </div>
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            এখনই শুরু করুন
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}