'use client';
import React from 'react';
import ProfileNavLink from './ProfileNavLink';
import { BsBorderAll } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/contexts/MainContext';
export default function ProfileLinksContainer() {
  const { removeUser } = useMainContext();
  const router = useRouter();
  const logout = () => {
    Cookies.remove('calidoUser');
    removeUser();
    router.push('/');
  };
  return (
    <div className='profile_link_container flex flex-col gap-y-3 sm:gap-y-5'>
      <ProfileNavLink link='/profile' Icon={BsBorderAll} title='Orders' />
      <ProfileNavLink
        link='/profile/account'
        Icon={AiOutlineUser}
        title='Account Details'
      />
      <ProfileNavLink
        link='/profile/shipingdetails'
        Icon={MdOutlineLocalShipping}
        title='Shipping Details'
      />
      <div
        className={`profile_link flex items-center gap-x-3 px-3 md:px-5 py-3 md:py-5 cursor-pointer`}
        onClick={logout}
      >
        <FiLogOut className='text-lg md:text-xl' />
        <span className='text-lg md:text-xl font-semibold'>Log out</span>
      </div>
      {/* <ProfileNavLink link='/profile/logout' Icon={FiLogOut} title='Log out' /> */}
    </div>
  );
}
