'use client';
import AllOrders from '@/components/cart/AllOrders';
import InfoAboutOrders from '@/components/cart/InfoAboutOrders';
import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import { useMainContext } from '@/contexts/MainContext';
import Link from 'next/link';
import React from 'react';

export default function Cart() {
  const { total_amount } = useMainContext();
  return (
    <div className='min-h-[40vh]'>
      {!total_amount ? (
        <div className='flex items-center justify-center flex-col gap-5 py-10 sm:py-15'>
          <h1 className='text-secondary text-2xl'>Your cart is empty</h1>
          <Link className='btn-primary' href='/shop'>
            Browse Shop
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
}
