'use client';
import ProfileLinksContainer from '@/components/profile/ProfileLinksContainer';
import TableOrders from '@/components/profile/TableOrders';
import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroLandingWithoutImage title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid md:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 md:col-span-1'>
              <ProfileLinksContainer />
            </div>
            <div className='col-span-3 md:col-span-2 overflow-x-auto'>
              <TableOrders />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
