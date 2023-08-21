'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkComponent({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClass = isActive ? 'border-b-4 border-primary' : '';
  return (
    <Link
      href={href}
      className={`text-lg font-semibold border-b-4 pb-4 ${activeClass}`}
    >
      {children}
    </Link>
  );
}
