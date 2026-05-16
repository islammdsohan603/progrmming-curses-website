'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MobileMenu from './MobailMenu';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm py-4 fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          EduBangli
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/courses'}>Courses</NavLink>
          <NavLink href={'/mentors'}>Mentors</NavLink>
          <NavLink href={'/blog'}>Blog</NavLink>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={'/login'}
            className="px-4 py-2 text-white bg-base-100 rounded-3xl font-medium hover:text-blue-600 transition-colors"
          >
            LogIn
          </Link>
          <Link
            href={'/signup'}
            className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
          >
            SignUp
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
