import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton({ count }) {
  return (
    <div className='relative cursor-pointer hover:text-primary smooth'>
      <AiOutlineShoppingCart className='h-6 w-6' />
      {count > 0 && (
        <div className='absolute -top-3 left-3 rounded-full bg-primary text-white w-5 h-5 flex items-center justify-center text-xs font-bold '>
          {count}
        </div>
      )}
    </div>
  );
}
