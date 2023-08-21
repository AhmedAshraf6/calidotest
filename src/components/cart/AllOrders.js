import Image from 'next/image';
import React from 'react';
import InputCounter from '../singleitem/InputCounter';
import { MdDelete } from 'react-icons/md';
export default function AllOrders() {
  return (
    <section>
      {/* Desktop */}
      <table className='hidden md:block  w-full '>
        <thead className='whitespace-nowrap border-b-2 border-gray-200 '>
          <tr>
            <th className='px-4 pb-4 text-left'>Order</th>
            <th className='px-4 pb-4 text-center '>Date</th>
            <th className='px-4 pb-4 text-center '>Status</th>
          </tr>
        </thead>
        <tbody className='table-body  '>
          <tr>
            <td className='px-4 py-4 ol-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 flex items-center gap-3 '>
              <Image
                src='/image-1.png'
                width='100'
                height='150'
                className='object-contain'
              />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                a.
              </span>
            </td>
            <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 '>
              <InputCounter />
            </td>
            <td className='px-4 py-4 col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 '>
              <div className='flex gap-x-4 items-center'>
                <span className='text-base sm:text-lg text-secondary'>
                  54Egp
                </span>
                <MdDelete className='text-secondary text-lg sm:text-xl cursor-pointer' />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Responsive Mode */}
      <div className='block md:hidden'>
        <h2 className='text-base sm:text-lg font-semibold border-b-2 border-gray-200 pb-2'>
          Product
        </h2>
        <div className='flex flex-col mt-3 gap-5'>
          {/* first product */}
          <div className='flex items-center gap-4 w-full'>
            <Image
              src='/image-1.png'
              width='100'
              height='200'
              className='object-contain'
            />
            <div className='flex flex-col gap-3 w-full'>
              <span>Lorem ipsum dolor sit amet consectetur</span>
              <div className='flex justify-between items-center flex-wrap'>
                <div className='flex gap-2 sm:gap-3 items-center'>
                  <InputCounter />
                  <span className='text-base sm:text-lg text-secondary'>
                    54Egp
                  </span>
                </div>
                <MdDelete className='text-secondary text-lg sm:text-xl cursor-pointer whitespace-nowrap' />
              </div>
            </div>
          </div>
          {/* second product */}

          <div className='flex items-center gap-4 w-full'>
            <Image
              src='/image-1.png'
              width='100'
              height='200'
              className='object-contain'
            />
            <div className='flex flex-col gap-3 w-full'>
              <span>Lorem ipsum dolor sit amet consectetur</span>
              <div className='flex justify-between items-center flex-wrap'>
                <div className='flex gap-2 sm:gap-3 items-center'>
                  <InputCounter />
                  <span className='text-base sm:text-lg text-secondary'>
                    54Egp
                  </span>
                </div>
                <MdDelete className='text-secondary text-lg sm:text-xl cursor-pointer whitespace-nowrap' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
