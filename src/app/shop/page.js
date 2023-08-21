'use client';
import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import Item from '@/components/shared-component/Product';
import ProductsContainer from '@/components/shop/ProductsContainer';
import SortShop from '@/components/shop/SortShop';
import { useMainContext } from '@/contexts/MainContext';
import React from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
export default function Shop() {
  const { detectFilter } = useMainContext();

  return (
    <section>
      <HeroLandingWithoutImage title='Shop' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          {/* Sort */}
          <div className='grid grid-cols-1 lg:grid-cols-4 items-start gap-4'>
            {/* Responsive */}
            <div className='col-span-1 d-block lg:hidden '>
              <button
                className='btn btn-primary flex items-center'
                onClick={() => detectFilter(true)}
              >
                Filter
                <BsFillFilterSquareFill className='mx-2' />
              </button>
            </div>
            {/* Responsive */}

            <div className='col-span-1 lg:col-span-3'>
              <ProductsContainer />
            </div>
            <div className='col-span-1 lg:col-span-1 hidden lg:block'>
              <SortShop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
