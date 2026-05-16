import {
  ArrowRight,
  Briefcase,
  HeartHandshake,
  Star,
  Users,
} from 'lucide-react';

const mentors = [
  {
    id: 'a1',
    name: 'মো. আরিফ হাসান',
    role: 'Senior Fullstack Developer',
    expertise: ['MERN Stack', 'React', 'Node.js'],
    rating: '4.9',
    students: '1.2k',
  },
  {
    id: 'b2',
    name: 'নিশা রহমান',
    role: 'UI/UX Mentor & Designer',
    expertise: ['UI Design', 'Figma', 'Product Thinking'],
    rating: '4.8',
    students: '900+',
  },
  {
    id: 'c3',
    name: 'ফারহান আজাদ',
    role: 'Career Coach',
    expertise: ['Interview Prep', 'Portfolio', 'Resume'],
    rating: '4.9',
    students: '1.5k',
  },
];

const MentorsPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
                এক্সপার্ট মেন্টরশিপ
              </p>
              <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
                আপনার ক্যারিয়ার গাইড করার জন্য সেরা মেন্টর খুঁজুন
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                বাংলায় প্রযুক্তি শেখার যাত্রায় সহায়তা করবে অভিজ্ঞ মেন্টররা।
                কোর্সের প্রতিটি ধাপে আরও দ্রুত সিদ্ধান্ত নিন এবং অ্যাকশনে যান।
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  <Users className="size-4 text-blue-600" />৩ জন টপ মেন্টর
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  <Star className="size-4 text-emerald-600" />
                  ৪.৯ রেটিং গড়ে
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-xl shadow-slate-800/40">
              <div className="inline-flex items-center gap-3 rounded-3xl bg-blue-600 px-4 py-3 text-sm font-black text-white">
                <Briefcase className="size-5" />
                প্রফেশনাল মেন্টরশিপ
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-200">
                মনোযোগী গাইড, পার্সোনাল কোড রিভিউ এবং ক্যারিয়ার নেক্সট স্টেপ
                প্ল্যান পেতে এখনই যোগাযোগ করুন।
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'লাইভ কোড রিভিউ',
                  'লাইন বাই লাইন ফিডব্যাক',
                  'জব, ফ্রিল্যান্স ও প্রজেক্ট গাইড',
                ].map(item => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-3xl bg-white/5 px-4 py-3"
                  >
                    <HeartHandshake className="size-5 text-emerald-300" />
                    <p className="text-sm leading-6 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {mentors.map(mentor => (
            <article
              key={mentor.id}
              className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-xl font-black text-white">
                    {mentor.name
                      .split(' ')
                      .map(part => part[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                  <Star className="size-4 text-amber-400" />
                  {mentor.rating}
                </div>
              </div>
              <h2 className="mt-8 text-2xl font-black text-slate-950">
                {mentor.name}
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {mentor.role}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mentor.expertise.map(skill => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 text-sm font-bold text-slate-700">
                <p className="inline-flex items-center gap-2">
                  <Users className="size-4 text-blue-600" />
                  {mentor.students}
                </p>
                <p className="inline-flex items-center gap-2">
                  <ArrowRight className="size-4 text-blue-600" />
                  বিস্তারিত
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              কিভাবে মেন্টর বাছবেন?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              আপনার লক্ষ্য, লার্নিং স্টাইল এবং টিমপ্লেস নির্দেশিকা সঙ্গে মিলিয়ে
              সেরা মেন্টর বেছে নিন। একজন ভালো মেন্টর শুধু কোড নয়, ক্যারিয়ার
              টার্নের দিকও দেখায়।
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'সম্পূর্ণ রোল প্ল্যান',
              'মেন্টর ফিডব্যাক সেশন',
              'প্রজেক্ট রিভিউ সহ কোচিং',
            ].map(item => (
              <div key={item} className="rounded-3xl bg-slate-50 px-5 py-4">
                <p className="font-black text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentorsPage;
