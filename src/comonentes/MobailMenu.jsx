'use client';
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
          className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
        >
          <ul className="flex flex-col items-center gap-6 px-4 py-8">
            <NavLink href={'/'}>হোম</NavLink>
            <NavLink href={'/courses'}>কোর্স</NavLink>
            <NavLink href={'/mentors'}>মেন্টর</NavLink>
            <NavLink href={'/blog'}>ব্লগ</NavLink>

            <div className="flex w-full flex-col gap-3 border-t border-slate-100 pt-4">
          

              <Link
                href={'/login'}
                className="rounded-lg border border-slate-200 py-2 text-center font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                লগইন
              </Link>
              <Link
                href={'/signup'}
                className="rounded-lg bg-blue-600 py-2 text-center font-bold text-white shadow-md transition hover:bg-blue-700"
              >
                শুরু করুন
              </Link>
            </div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
