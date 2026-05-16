import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "কোর্স", href: "/courses" },
  { label: "মেন্টর", href: "/mentors" },
  { label: "ব্লগ", href: "/blog" },
];

const courseLinks = [
  { label: "ওয়েব ডেভেলপমেন্ট", href: "/courses" },
  { label: "Frontend With React", href: "/courses" },
  { label: "MERN Stack", href: "/courses" },
  { label: "UI/UX Design", href: "/courses" },
];

const supportLinks = [
  { label: "লাইভ সাপোর্ট", href: "/contact" },
  { label: "ক্যারিয়ার গাইড", href: "/blog" },
  { label: "FAQ", href: "/blog" },
  { label: "যোগাযোগ", href: "/contact" },
];

const highlights = [
  { icon: BookOpenCheck, label: "প্রজেক্ট-বেইজড কোর্স" },
  { icon: Users, label: "এক্সপার্ট মেন্টর" },
  { icon: ShieldCheck, label: "ক্যারিয়ার সাপোর্ট" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-400">
              Start Learning Today
            </p>
            <h2 className="mt-2 text-2xl font-black">
              নতুন ব্যাচ আপডেট ও ফ্রি রিসোর্স পেতে যুক্ত থাকুন
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              কোর্স আপডেট, লাইভ ক্লাস নোটিশ এবং ক্যারিয়ার টিপস সরাসরি আপনার
              ইনবক্সে পাঠানো হবে।
            </p>
          </div>

          <form className="grid gap-3 sm:grid-cols-[minmax(220px,1fr)_auto]">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="আপনার ইমেইল"
              className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-400/30"
            />
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              সাবস্ক্রাইব
              <Send className="size-4" />
            </button>
          </form>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                <GraduationCap className="size-7" />
              </span>
              <span className="text-2xl font-black">EduBangli</span>
            </Link>

            <p className="mt-5 max-w-md leading-8 text-slate-300">
              বাংলা ভাষায় প্র্যাকটিক্যাল টেক স্কিল শেখার প্ল্যাটফর্ম। লাইভ
              ক্লাস, রিয়েল প্রজেক্ট, মেন্টরশিপ এবং ক্যারিয়ার প্রস্তুতি এক
              জায়গায়।
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="size-5 text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Popular Courses" links={courseLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-blue-400" />
              support@edubangli.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneCall className="size-4 text-blue-400" />
              +880 1700-000000
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-blue-400" />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Code Lab", icon: Code2 },
              { label: "Career", icon: BriefcaseBusiness },
            ].map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href="/courses"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-bold text-slate-200 transition hover:border-blue-400 hover:text-white"
              >
                <Icon className="size-4" />
                {label}
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EduBangli. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <span className="size-1.5 rounded-full bg-blue-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
