'use client';
import React, { useState } from 'react';

export default function InputCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <div className='relative '>
      <button
        className=' text-gray-700 rounded-sm w-6 h-6  absolute top-[10px] md:top-[16px]  left-[4px]  flex justify-center items-center hover:bg-primary smooth text-lg'
        onClick={decrement}
      >
        -
      </button>
      <input
        type='number'
        value={count}
        className='text-center border-gray-500 border rounded-md  w-[80px] md:w-[120px] py-2 md:py-4 '
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button
        className=' text-gray-700 rounded-sm w-6 h-6 absolute top-[10px] md:top-[16px] right-[4px] flex justify-center items-center hover:bg-primary smooth text-lg'
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
