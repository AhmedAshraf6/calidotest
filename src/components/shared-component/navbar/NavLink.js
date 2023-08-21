'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useMainContext } from '@/contexts/MainContext';

export default function NavLink({ id, link, title }) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const activeClass = isActive ? 'text-primary' : '';
  const { detectNavbar } = useMainContext();

  return (
    <Link
      className={`font-bold cursor-pointer hover:text-primary transition duration-20 ${activeClass}`}
      key={id}
      href={link}
      aria-label='title'
      onClick={() => detectNavbar(false)}
    >
      {title}
    </Link>
  );
}
