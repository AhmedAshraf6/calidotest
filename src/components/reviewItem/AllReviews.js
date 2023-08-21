import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function AllReviews() {
  return (
    <div className=''>
      <h2 className='text-base sm:text-xl font-semibold border-b-2 border-gray-200 pb-3 sm:pb-5 '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
        maiores?
      </h2>
      <div className='flex flex-col gap-y-4 sm:gap-y-8 mt-3 sm:mt-8'>
        <div className='flex items-start gap-3'>
          <Image
            src='/image-1.png'
            width='100'
            height='100'
            className='rounded-full w-[50px] h-[50px] object-cover'
            alt='review'
          />
          <div className='flex flex-col gap-y-3 sm:gap-y-5 w-full'>
            <div className='flex justify-between items-center flex-wrap'>
              <h1 className='text-sm sm:text-lg font-semibold'>
                Ahmed
                <span className='text-base text-secondary'>
                  {' '}
                  / July 15,2023
                </span>
              </h1>
              <div className='flex gap-2 whitespace-nowrap'>
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
                <FaStar className='text-[#e4e5e9]' />
                <FaStar className='text-[#e4e5e9]' />
                <FaStar className='text-[#e4e5e9]' />
              </div>
            </div>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              nobis debitis sunt nemo illo a voluptatum atque mollitia dolorem
              quo?.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <Image
            src='/image-1.png'
            width='100'
            height='100'
            className='rounded-full w-[50px] h-[50px] object-cover'
          />
          <div className='flex flex-col gap-y-3 sm:gap-y-5 w-full'>
            <div className='flex justify-between items-center flex-wrap '>
              <h1 className='text-sm sm:text-lg font-semibold'>
                Ahmed
                <span className='text-base text-secondary'>
                  {' '}
                  / July 15,2023
                </span>
              </h1>
              <div className='flex gap-2 whitespace-nowrap'>
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
                <FaStar className='text-[#e4e5e9]' />
                <FaStar className='text-[#e4e5e9]' />
                <FaStar className='text-[#e4e5e9]' />
              </div>
            </div>
            <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      {/* if product doesn't have reviews */}
      {/* <h2 className='text-lg font-bold mb-3 sm:mb-5'>Reviews</h2>
      <span className='text-secondary '>There are no Reviews yet</span> */}
    </div>
  );
}
