import { getDetailsData } from '@/db/data';
import Image from 'next/image';
import {
  BadgeCheck,
  CreditCard,
  ShieldCheck,
  Smartphone,
  Trash2,
} from 'lucide-react';
import OrderButton from '@/comonentes/OrderButton';

const CheckOutPage = async ({ params }) => {
  const { id } = await params;

  const userData = await getDetailsData(id);

  return (
    <main className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT SIDE */}
          <section className="space-y-6">
            {/* Heading */}
            <div>
              <h1 className="text-3xl font-black text-slate-950">চেকআউট</h1>

              <p className="mt-2 text-sm font-medium text-slate-500">
                আপনার কোর্সের ভর্তি নিশ্চিত করতে নিচের তথ্য পূরণ করুন
              </p>
            </div>

            {/* Billing Info */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <BadgeCheck className="size-5 text-violet-600" />

                <h2 className="text-xl font-black text-slate-950">
                  বিলিং তথ্য
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    আপনার নাম
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="মোঃ আরিফ হাসান"
                    className="h-12 w-full rounded-xl border border-slate-200  text-black font-bold px-4 outline-none transition focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    ইমেইল অ্যাড্রেস
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="h-12 w-full rounded-xl border border-slate-200  text-black font-bold px-4 outline-none transition focus:border-violet-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-bold text-black">
                  ফোন নাম্বার
                </label>

                <input
                  type="number"
                  required
                  placeholder="+880 18XXXXXXXX"
                  className="h-12 text-black font-bold w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-violet-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <CreditCard className="size-5 text-violet-600" />

                <h2 className="text-xl font-black text-slate-950">
                  পেমেন্ট মেথড
                </h2>
              </div>

              <div className="space-y-4">
                {/* Card */}
                <label className="flex cursor-pointer items-center justify-between rounded-2xl border-2 border-violet-500 bg-violet-50 p-4 transition">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="size-4 accent-violet-600"
                    />

                    <CreditCard className="size-5 text-slate-700" />

                    <span className="font-bold text-slate-800">
                      ক্রেডিট/ডেবিট কার্ড
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-7 w-10 rounded bg-slate-800" />
                    <div className="h-7 w-10 rounded bg-slate-400" />
                  </div>
                </label>

                {/* Mobile Banking */}
                <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-violet-300">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      className="size-4 accent-violet-600"
                    />

                    <Smartphone className="size-5 text-slate-700" />

                    <span className="font-bold text-slate-800">
                      মোবাইল ব্যাংকিং (বিকাশ, নগদ, রকেট)
                    </span>
                  </div>

                  <Trash2 className="size-4 text-slate-400" />
                </label>

                {/* Internet Banking */}
                <label className="flex cursor-pointer items-center rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-violet-300">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      className="size-4 accent-violet-600"
                    />

                    <ShieldCheck className="size-5 text-slate-700" />

                    <span className="font-bold text-slate-800">
                      ইন্টারনেট ব্যাংকিং
                    </span>
                  </div>
                </label>
              </div>

              <div className="mt-5 rounded-xl bg-violet-50 p-4 text-center text-sm font-semibold text-violet-700">
                🔒 আপনার পেমেন্ট সম্পূর্ণ নিরাপদ ও এনক্রিপ্টেড
              </div>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            {/* Course Image */}
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image
                src={userData?.image || '/banner.jpg'}
                alt={userData?.title || 'Course'}
                fill
                className="object-cover"
              />

              <div className="absolute left-3 top-3 rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">
                বেস্ট সেলার
              </div>
            </div>

            {/* Course Info */}
            <div className="mt-5">
              <h2 className="line-clamp-2 text-2xl font-black text-slate-950">
                {userData?.title || 'MERN Stack Development'}
              </h2>

              <div className="mt-4 space-y-3 border-b border-slate-200 pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    কোর্স মূল্য
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-400 line-through">
                      ৳ ৯,৯৯০
                    </span>

                    <span className="text-lg font-black text-violet-700">
                      ৳ {userData?.price || '৫,০০০'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    মোট মূল্য
                  </span>

                  <span className="text-lg font-black text-slate-950">
                    ৳ {userData?.price || '৫,০০০'}
                  </span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  কুপন কোড
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="কুপন কোড লিখুন"
                    className="h-11 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-500"
                  />

                  <button className="rounded-xl bg-slate-900 px-5 text-sm font-bold text-white transition hover:bg-slate-800">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <OrderButton />

              <p className="mt-4 text-center text-xs leading-6 text-slate-500">
                “নিরাপদ অর্ডার করুন” বাটনে ক্লিক করার মাধ্যমে আপনি আমাদের
                <span className="font-bold text-violet-600">
                  {' '}
                  শর্তাবলী
                </span>{' '}
                মেনে নিচ্ছেন।
              </p>
            </div>

            {/* Support */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-800">
                আমাদের হেল্পলাইন
              </p>

              <p className="mt-1 text-sm font-medium text-slate-500">
                যেকোনো প্রয়োজনে যোগাযোগ করুন
              </p>

              <p className="mt-3 font-black text-violet-700">
                +880 01643223840
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
