'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { HiMiniBars3 } from 'react-icons/hi2';
import CartButton from './CartButton';
import { useMainContext } from '@/contexts/MainContext';
import Link from 'next/link';
import SearchInput from './SearchInput';
import Cookies from 'js-cookie';

export default function TopNavbar() {
  const { detectNavbar } = useMainContext();
  const [isClient, setIsClient] = useState(false);
  const token = Cookies.get('calidoUser');
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <nav className='py-5 lg:py-10 px-5 lg:px-8 '>
        <div className='grid grid-cols-5 place-items-center'>
          <div className='hidden lg:flex items-center gap-5  col-span-1'>
            <FaFacebook className='cursor-pointer hover:text-primary smooth text-lg' />
            <AiOutlineTwitter className='cursor-pointer hover:text-primary smooth text-lg' />
            <AiFillInstagram className='cursor-pointer hover:text-primary smooth text-lg' />
          </div>
          <HiMiniBars3
            className='text-2xl smooth cursor-pointer hover:text-primary block lg:hidden'
            onClick={() => detectNavbar(true)}
          />

          <Link href='/' className='col-span-3 lg:col-span-2 '>
            <Image
              src='/logo.png'
              width={60}
              height={60}
              alt='logo-prolighthub'
              className='max-w-full object-contain w-[80px] lg:w-[120px] h-auto'
            />
          </Link>

          <div className='flex items-center gap-5 col-span-1 lg:col-span-2  '>
            <div className='hidden lg:block'>
              <SearchInput />
            </div>
            {isClient && token && (
              <Link href='/profile'>
                <CgProfile className='hidden lg:block cursor-pointer hover:text-primary smooth text-2xl' />
              </Link>
            )}
            {isClient && !token && (
              <Link
                href='/signin'
                className='hidden lg:block btn-primary whitespace-nowrap'
              >
                Sign in
              </Link>
            )}
            {/* Resonsive Mode */}
            {isClient && !token && (
              <Link
                href='/signin'
                className='block lg:hidden whitespace-nowrap'
              >
                Sign in
              </Link>
            )}
            {isClient && token && (
              <Link href='/profile' className='block lg:hidden'>
                <CgProfile className='cursor-pointer hover:text-primary smooth text-2xl' />
              </Link>
            )}

            <Link href='/cart'>
              <CartButton count='1' />
            </Link>
          </div>
          {/* <SearchInput /> */}
        </div>
      </nav>
      <hr className='hidden lg:block text-secondary bg-secondary mx-6' />
    </>
  );
}
