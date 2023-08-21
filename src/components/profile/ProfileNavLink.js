'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileNavLink({ link, Icon, title }) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const activeClass = isActive ? 'bg-primary text-white' : '';
  return (
    <Link
      href={link}
      className={`profile_link flex items-center gap-x-3 px-3 md:px-5 py-3 md:py-5 ${activeClass}`}
    >
      <Icon className='text-lg md:text-xl' />
      <span className='text-lg md:text-xl font-semibold'>{title}</span>
    </Link>
  );
}
