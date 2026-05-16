'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MobileMenu from './MobailMenu';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/90 py-3 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xl font-black text-slate-950"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white">
            <GraduationCap className="size-6" />
          </span>
          <span className="bg-linear-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
            EduBangli
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <NavLink href={'/'}>হোম</NavLink>
          <NavLink href={'/courses'}>কোর্স</NavLink>
          <NavLink href={'/mentors'}>মেন্টর</NavLink>
          <NavLink href={'/blog'}>ব্লগ</NavLink>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={'/login'}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            লগইন
          </Link>
          <Link
            href={'/signup'}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700"
          >
            শুরু করুন
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
