'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="group relative py-2">
      <span
        className={`transition-colors duration-300 font-medium ${
          isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-500'
        }`}
      >
        {children}
      </span>

      <motion.div
        initial={false}
        animate={{ width: isActive ? '100%' : '0%' }}
        className="absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600"
        style={{ width: isActive ? '100%' : '0%' }}
      />

      {!isActive && (
        <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-full" />
      )}
    </Link>
  );
};

export default NavLink;
