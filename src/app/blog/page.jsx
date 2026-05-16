import Link from 'next/link';
import { ArrowRight, BookOpenCheck, Clock3, Sparkles, Tag } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'রিয়েল প্রজেক্ট দিয়ে জাভাস্ক্রিপ্ট শেখার বেস্ট ওয়ার্কফ্লো',
    excerpt:
      'সিনপ্ল আইডিয়া থেকে প্রোডাকশন-গ্রেড অ্যাপে যাওয়ার সেরা স্টেপ-বাই-স্টেপ গাইড।',
    category: 'Frontend',
    date: '১৫ মে, ২০২৬',
  },
  {
    id: '2',
    title: 'মেন্টরশিপ কিভাবে ক্যারিয়ারকে দ্রুত গতি দেয়',
    excerpt:
      'সঠিক মেন্টর এবং সিস্টেম্যাটিক স্টাডি প্ল্যান আপনার স্কিলকে প্রফেশনাল করে।',
    category: 'Career',
    date: '১০ মে, ২০২৬',
  },
  {
    id: '3',
    title: 'React ১৮ বেসিক থেকে অ্যাডভান্স স্তর পর্যন্ত',
    excerpt:
      'কম্পোনেন্ট ডিজাইন, হুকস, পারফরম্যান্স অপটিমাইজেশন এবং প্রোডাকশন টিপস।',
    category: 'React',
    date: '৩ মে, ২০২৬',
  },
];

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-linear-to-r from-blue-600 via-slate-950 to-slate-950 px-6 py-16 text-white shadow-xl shadow-slate-300/20 sm:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-100">
              <Sparkles className="size-4 text-emerald-300" />
              ব্লগ এবং টিপস
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              বাংলা টেক ব্লগ যা আপনাকে কোর্সে আরো দ্রুত এগিয়ে নেবে
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              নতুন ট্রেন্ড, মেন্টরশিপ স্ট্রাটেজি, ক্যারিয়ার গাইড এবং
              প্রজেক্ট-ভিত্তিক লার্নিং নিয়ে সহজবোধ্য আর্টিকেল।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              >
                সব কোর্স দেখুন
                <ArrowRight className="size-4" />
              </Link>
              <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100">
                প্রজেক্ট ভিত্তিক, প্রাক্টিক্যাল আর্টিকেল
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    ব্লগ আপডেট
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    সাম্প্রতিক ব্লগ পোস্ট
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  <BookOpenCheck className="size-4 text-blue-600" />
                  রিয়েল টেক টিপস
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {posts.map(post => (
                  <article
                    key={post.id}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-950/5 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/30"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-700">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="size-4 text-slate-400" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-slate-950">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {post.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                    >
                      বিস্তারিত পড়ুন
                      <ArrowRight className="size-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">
                ব্লগ কি নিয়ে?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                আমরা শেয়ার করি বাংলা ভাষায় কোডিং ক্যারিয়ার, মেন্টরশিপ, রিয়েল
                প্রজেক্ট গাইড এবং চাকরি প্রস্তুতি টিপস — যেন আপনি প্রতিদিন লার্ন
                করতে আগ্রহী থাকেন।
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {['টিপস', 'মূল্যায়ন', 'ক্যারিয়ার গাইড'].map(tag => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">
                আপনার ব্লগ প্ল্যান
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                নিয়মিত আপডেট, প্রজেক্ট রিভিউ এবং ক্যারিয়ার কোচিং নিয়ে ব্লগ
                সিরিজ।
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  প্রজেক্ট ভিত্তিক টিউটোরিয়াল
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  মেন্টর টিপস ও সেলফ-লার্নিং
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  ইন্টারভিউ প্রিপারেশনগাইড
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <div className="inline-flex items-center gap-3 rounded-3xl bg-blue-600 px-4 py-3 text-sm font-bold">
                <BookOpenCheck className="size-5" />
                নিবন্ধিত সদস্যদের জন্য এক্সক্লুসিভ
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-200">
                সদস্যদের জন্য ডিপ ডাইভ আর্টিকেল, ক্যারিয়ার প্ল্যানার এবং কোর্স
                রেকমেন্ডেশন।
              </p>
              <Link
                href="/signup"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              >
                এখন যোগ দিন
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
