'use client';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <ul className="flex flex-col items-center gap-6 py-8 px-4">
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/courses'}>Courses</NavLink>
            <NavLink href={'/mentors'}>Mentors</NavLink>
            <NavLink href={'/blog'}>Blog</NavLink>

            <div className="flex flex-col gap-4 w-full pt-4 border-t border-gray-100">
              <Link
                href={'/login'}
                className="text-center py-2 text-gray-600 font-medium hover:text-blue-600 transition"
              >
                LogIn
              </Link>
              <Link
                href={'/signup'}
                className="text-center py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                SignUp
              </Link>
            </div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
