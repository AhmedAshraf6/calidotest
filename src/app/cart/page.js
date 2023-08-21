import AllOrders from '@/components/cart/AllOrders';
import InfoAboutOrders from '@/components/cart/InfoAboutOrders';
import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import React from 'react';

export default function page() {
  return (
    <>
      <HeroLandingWithoutImage title='Cart' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid lg:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 lg:col-span-2 overflow-x-auto'>
              {/* All Orders */}
              <AllOrders />
            </div>
            <div className='col-span-3 lg:col-span-1'>
              {/* Info about all orders */}
              <InfoAboutOrders />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
