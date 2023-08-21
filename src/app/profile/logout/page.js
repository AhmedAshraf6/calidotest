'use client';
import HeroLanding from '@/components/shared-component/HeroLandingWithoutImage';
import ProfileLinksContainer from '@/components/profile/ProfileLinksContainer';
import React from 'react';
import Cookies from 'js-cookie';

export default function page() {
  Cookies.remove('calidoUser');

  return (
    <>
      <HeroLanding title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid md:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 md:col-span-1'>
              <ProfileLinksContainer />
            </div>
            <div className='col-span-3 md:col-span-2'>lOG OUT</div>
          </div>
        </div>
      </div>
    </>
  );
}
