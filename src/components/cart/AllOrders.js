import Image from 'next/image';
import React from 'react';
import InputCounter from '../singleitem/InputCounter';
import { MdDelete } from 'react-icons/md';
import { useMainContext } from '@/contexts/MainContext';
export default function AllOrders() {
  const { cart, updateCart, removeFromCart } = useMainContext();
  return (
    <section className='w-full'>
      {/* Desktop */}
      <table className='hidden md:block  w-full '>
        <thead className='whitespace-nowrap border-b-2 border-gray-200 w-[100%] '>
          <tr className='w-full'>
            <th className='px-4 pb-4 text-left w-full'>Order</th>
            <th className='px-4 pb-4 text-center w-full'>Amount</th>
            <th className='px-4 pb-4 text-center w-full'>Status</th>
          </tr>
        </thead>
        <tbody className='table-body w-full'>
          {cart?.map((product) => {
            console.log(product);
            return (
              <tr key={product.id} className='w-full'>
                <td className='px-4 py-4 ol-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 flex items-center gap-3 '>
                  <Image
                    src='/image-1.png'
                    width='100'
                    height='150'
                    className='object-contain'
                  />
                  <span>{product.name}</span>
                </td>
                {/* <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 '>
              <InputCounter />
            </td> */}
                <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
                  <div className='flex gap-3'>
                    <button
                      className=' text-gray-700 rounded-sm flex justify-center items-center w-5 hover:bg-primary smooth text-lg'
                      onClick={() => updateCart(product.id, 'dec')}
                    >
                      -
                    </button>

                    <span className='text-center text-xl '>
                      {product.amount}
                    </span>
                    <button
                      className='  text-gray-700 rounded-sm flex justify-center items-center w-5 hover:bg-primary smooth text-lg'
                      onClick={() => updateCart(product.id, 'inc')}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='px-4 py-4 col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 '>
                  <div className='flex gap-x-4 items-center'>
                    <span className='text-base sm:text-lg text-secondary'>
                      {product.price}Egp
                    </span>
                    <MdDelete
                      className='text-secondary text-lg sm:text-xl cursor-pointer'
                      onClick={() => removeFromCart}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Responsive Mode */}
      <div className='block md:hidden'>
        <h2 className='text-base sm:text-lg font-semibold border-b-2 border-gray-200 pb-2'>
          Product
        </h2>
        <div className='flex flex-col mt-3 gap-5'>
          {cart?.map((product) => {
            return (
              <div className='flex items-center gap-4 w-full'>
                <Image
                  src='/image-1.png'
                  width='100'
                  height='200'
                  className='object-contain'
                />
                <div className='flex flex-col gap-3 w-full'>
                  <span>{product?.name}</span>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 sm:gap-3 items-center'>
                      <div className='flex items-center gap-4'>
                        <button
                          className=' text-gray-700 rounded-sm flex justify-center items-center w-5 hover:bg-primary smooth text-lg'
                          onClick={() => updateCart(product.id, 'dec')}
                        >
                          -
                        </button>

                        <span className='text-center text-xl '>
                          {product?.amount}
                        </span>
                        <button
                          className='  text-gray-700 rounded-sm flex justify-center items-center w-5 hover:bg-primary smooth text-lg'
                          onClick={() => updateCart(product.id, 'inc')}
                        >
                          +
                        </button>
                      </div>
                      <span className='text-base sm:text-lg text-secondary'>
                        {product?.price}Egp
                      </span>
                    </div>
                    <MdDelete className='text-secondary text-lg sm:text-xl cursor-pointer ' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
