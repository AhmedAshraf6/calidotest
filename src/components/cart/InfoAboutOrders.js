import React from 'react';

export default function InfoAboutOrders() {
  return (
    <section className='p-4 sm:p-6 border-2 border-gray-200'>
      <h5 className='text-base sm:text-lg font-bold'>Cart totals</h5>
      <div className='flex justify-between flex-wrap gap-3 pb-4 border-b-2 border-gray-200 border-dotted  my-4'>
        <span className='text-base sm:text-lg text-secondary font-semibold'>
          Subtotal
        </span>
        <span className='text-base sm:text-lg text-secondary font-semibold'>
          100Egp
        </span>
      </div>
      <div className='flex justify-between flex-wrap gap-3 my-4'>
        <span className='text-base sm:text-lg text-secondary font-semibold'>
          Total
        </span>
        <span className='text-base sm:text-lg text-secondary font-semibold'>
          100Egp
        </span>
      </div>
      <button className='btn-primary w-full mt-4 sm:mt-6'>
        proceed to checkout
      </button>
    </section>
  );
}
