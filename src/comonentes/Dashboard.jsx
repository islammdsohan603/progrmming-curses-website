'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Award,
  Bell,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  Heart,
  LayoutDashboard,
  PlayCircle,
  Settings,
  Trophy,
  UserRound,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const menuItems = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'enrolled', label: 'Enrolled Courses', icon: BookOpenCheck },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const enrolledCourses = [
  {
    title: 'Complete Web Development Bootcamp',
    category: 'Programming',
    progress: 68,
    image: '/banner.jpg',
    lessons: '36/52 lessons',
    time: '8h 20m left',
  },
  {
    title: 'Frontend Mastery With React',
    category: 'Web Design',
    progress: 42,
    image: '/dashboard.png',
    lessons: '18/42 lessons',
    time: '12h 10m left',
  },
];

const liveClasses = [
  {
    date: '24',
    month: 'May',
    title: 'React Components Deep Dive',
    time: '08:00 PM - 10:00 PM',
  },
  {
    date: '28',
    month: 'May',
    title: 'JavaScript Problem Solving',
    time: '09:00 PM - 10:30 PM',
  },
];

const certificates = [
  'Web Development Fundamentals',
  'React Component Architecture',
  'JavaScript Essentials',
];

const wishlist = [
  'Advanced Next.js App Router',
  'Cyber Security Essentials',
  'Machine Learning Basics',
];

export default function DashboardPage({ user, isPending }) {
  const [activeTab, setActiveTab] = useState('overview');

  const router = useRouter();

  const displayName = typeof user?.name === 'string' ? user.name : 'Learner';

  const userImage = user?.image || '/profile.png';

  const handleLogout = async () => {
    await authClient.signOut();

    router.refresh();

    router.push('/');
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:self-start">
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-blue-100">
                {user?.image ? (
                  <Image
                    src={userImage}
                    alt={displayName}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound className="size-6 text-blue-700" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-black text-slate-950">
                  {isPending ? 'Loading...' : displayName}
                </p>

                <p className="text-xs font-semibold text-slate-500">
                  Student Account
                </p>

                <button
                  onClick={handleLogout}
                  className="mt-2 rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id;

                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`group flex min-h-11 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4" />
                      {label}
                    </span>

                    {isActive && <ChevronRight className="size-4" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <section className="min-w-0">
            {activeTab === 'overview' && (
              <OverviewPanel
                user={user}
                displayName={displayName}
                userImage={userImage}
              />
            )}

            {activeTab === 'enrolled' && <EnrolledCoursesPanel />}

            {activeTab === 'certificates' && (
              <SimpleListPanel
                title="Certificates"
                items={certificates}
                icon={Award}
              />
            )}

            {activeTab === 'wishlist' && (
              <SimpleListPanel title="Wishlist" items={wishlist} icon={Heart} />
            )}

            {activeTab === 'settings' && <SettingsPanel user={user} />}
          </section>
        </div>
      </div>
    </main>
  );
}

function OverviewPanel({ user, displayName, userImage }) {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold text-blue-700">Welcome Back</p>

          <h1 className="mt-1 text-2xl font-black text-slate-950 md:text-3xl">
            স্বাগতম, {displayName}
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            আপনার learning progress দেখে নিন এবং আজকের ক্লাস শুরু করুন।
          </p>
        </div>

        <div className="rounded-2xl bg-slate-950 p-3">
          <Image
            src={userImage}
            alt={displayName}
            width={76}
            height={76}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <StatsGrid />

      <EnrolledCoursesPanel compact />

      <LiveClassPanel />
    </div>
  );
}

function StatsGrid() {
  const stats = [
    { label: 'Running Courses', value: '2', icon: BookOpenCheck },
    { label: 'Completed Courses', value: '4', icon: CheckCircle2 },
    { label: 'Learning Hours', value: '120', icon: Clock3 },
    { label: 'Certificates', value: '3', icon: Trophy },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Icon className="size-5" />
          </div>

          <p className="mt-4 text-3xl font-black text-slate-950">{value}</p>

          <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  );
}

function EnrolledCoursesPanel({ compact = false }) {
  const courses = compact ? enrolledCourses.slice(0, 2) : enrolledCourses;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-blue-700">My Learning</p>

          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Enrolled Courses
          </h2>
        </div>

        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
          See All
        </button>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {courses.map(course => (
          <article
            key={course.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="relative h-44">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-black uppercase text-blue-700">
                {course.category}
              </p>

              <h3 className="mt-2 text-lg font-black text-slate-950">
                {course.title}
              </h3>

              <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>{course.lessons}</span>
                <span>{course.progress}% Complete</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>

              <button className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700">
                Continue Learning
                <PlayCircle className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function LiveClassPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <CalendarDays className="size-5 text-blue-600" />

        <h2 className="text-2xl font-black text-slate-950">
          Upcoming Live Classes
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {liveClasses.map(item => (
          <div
            key={item.title}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[70px_1fr_auto] sm:items-center"
          >
            <div className="rounded-xl bg-white p-3 text-center shadow-sm">
              <p className="text-xs font-black text-blue-700">{item.month}</p>

              <p className="text-2xl font-black text-slate-950">{item.date}</p>
            </div>

            <div>
              <h3 className="font-black text-slate-950">{item.title}</h3>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                {item.time}
              </p>
            </div>

            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleListPanel({ title, items, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-blue-600" />

        <h1 className="text-2xl font-black text-slate-950">{title}</h1>
      </div>

      <div className="mt-5 space-y-3">
        {items.map(item => (
          <div
            key={item}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <span className="font-bold text-slate-700">{item}</span>

            <Download className="size-4 text-blue-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel({ user }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Bell className="size-5 text-blue-600" />

        <h1 className="text-2xl font-black text-slate-950">Settings</h1>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Name</p>

          <p className="mt-1 font-black text-slate-950">
            {user?.name || 'Learner'}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-500">Email</p>

          <p className="mt-1 font-black text-slate-950">
            {user?.email || 'No email found'}
          </p>
        </div>
      </div>
    </div>
  );
}
