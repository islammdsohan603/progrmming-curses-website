'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: users.name,
      email: users.email,
      password: users.password,
    });

    console.log(data);

    if (data) {
      toast.success('Account created! Welcome aboard 🎉');
      router.push('/login');
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="hidden space-y-8 text-white lg:block">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-500/30">
                  আমাদের সাথে যোগ দিন
                </span>
              </div>
              <div>
                <h1 className="text-5xl font-black leading-tight text-white">
                  আপনার টেক ক্যারিয়ার শুরু করুন এখনই
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  প্র্যাকটিক্যাল প্রজেক্ট, এক্সপার্ট মেন্টরশিপ এবং ক্যারিয়ার
                  সাপোর্ট সহ শিখুন
                </p>
              </div>
              <div className="space-y-3">
                {[
                  '✨ লাইভ ব্যাচ এবং রিয়েল প্রজেক্ট',
                  '👨‍💼 এক্সপার্ট মেন্টর সাপোর্ট',
                  '🎯 ক্যারিয়ার রোডম্যাপ এবং গাইডেন্স',
                ].map((benefit, idx) => (
                  <p
                    key={idx}
                    className="text-base font-semibold text-slate-200"
                  >
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 shadow-2xl backdrop-blur sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-white">
                  একাউন্ট তৈরি করুন
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  ইতিমধ্যে একাউন্ট আছে?{' '}
                  <Link
                    href="/login"
                    className="font-bold text-blue-400 transition hover:text-blue-300"
                  >
                    লগইন করুন
                  </Link>
                </p>
              </div>

              <Form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <Label className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                    <User className="size-4 text-blue-400" />
                    আপনার নাম
                  </Label>
                  <Input
                    isRequired
                    name="name"
                    type="text"
                    placeholder="মো. আরিফ হাসান"
                    className="bg-slate-800/50 text-white w-full placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                    <Mail className="size-4 text-blue-400" />
                    ইমেইল অ্যাড্রেস
                  </Label>
                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={value => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                      ) {
                        return 'সঠিক ইমেইল লিখুন';
                      }
                      return null;
                    }}
                  >
                    <Input
                      placeholder="you@example.com"
                      className="bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                    <FieldError className="text-xs text-red-400" />
                  </TextField>
                </div>

                <div>
                  <Label className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                    <Lock className="size-4 text-blue-400" />
                    পাসওয়ার্ড
                  </Label>
                  <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={value => {
                      if (value.length < 8) {
                        return 'কমপক্ষে ৮ ক্যারেক্টার প্রয়োজন';
                      }
                      if (!/[A-Z]/.test(value)) {
                        return 'এক টা বড় লেটার থাকতে হবে';
                      }
                      if (!/[0-9]/.test(value)) {
                        return 'এক টা নাম্বার থাকতে হবে';
                      }
                      return null;
                    }}
                  >
                    <Input
                      placeholder="••••••••"
                      className="bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                    <Description className="mt-1 text-xs text-slate-400">
                      ন্যূনতম ৮ ক্যারেক্টার, ১ বড় লেটার এবং ১ নাম্বার
                    </Description>
                    <FieldError className="text-xs text-red-400" />
                  </TextField>
                </div>

                <Button
                  type="submit"
                  className="mt-8 w-full bg-linear-to-r from-blue-600 to-blue-700 font-black text-white transition hover:from-blue-700 hover:to-blue-800"
                >
                  একাউন্ট তৈরি করুন
                  <ArrowRight className="size-4" />
                </Button>

                <p className="text-center text-xs text-slate-400">
                  আমাদের{' '}
                  <Link
                    href="#"
                    className="text-blue-400 transition hover:text-blue-300"
                  >
                    শর্তাবলী
                  </Link>{' '}
                  এবং{' '}
                  <Link
                    href="#"
                    className="text-blue-400 transition hover:text-blue-300"
                  >
                    গোপনীয়তা নীতি
                  </Link>{' '}
                  সম্মত করছি
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
