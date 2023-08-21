import React from 'react';

export default function Sale() {
  return (
    <div className='mt-8 sm:mt-24'>
      <div className='container'>
        <div className='flex items-center justify-between sale-image bg-cover bg-no-repeat w-full  rounded-lg py-5 sm:py-20 px-5 sm:px-10'>
          <div className='flex flex-col gap-y-3 sm:gap-y-5 items-start'>
            <h1 className='text-lg sm:text-3xl text-white font-bold'>
              Deal Of The Day
            </h1>
            <p className='text-sm font-semibold  text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className=' bg-white text-black px-2 sm:px-5 py-1 sm:py-2 hover:text-white hover:bg-primary smooth rounded-md'>
              Grap The Deal Now
            </button>
          </div>
          <div className='hidden md:block'>
            <span className='text-8xl font-bold text-white'>70%</span>
            <p className='text-sm  text-white mt-2'>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
