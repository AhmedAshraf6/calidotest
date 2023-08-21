'use client';
import { useMainContext } from '@/contexts/MainContext';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import SortShop from './SortShop';
export default function ReponsiveFilter() {
  const { filter, detectFilter } = useMainContext();

  return (
    <>
      <aside
        className={`fixed px-10 ${
          filter && 'visiblefilter'
        } h-[100%] bg-black/80 top-0  w-[100%]  z-10 filter`}
      >
        <div className='flex justify-end'>
          <AiOutlineClose
            className='text-2xl  cursor-pointer text-white m-3 hover:text-primary'
            onClick={() => detectFilter(false)}
          />
        </div>
        <SortShop />
      </aside>
    </>
  );
}
