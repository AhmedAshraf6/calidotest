import React from 'react';

export default function SearchInput() {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search'
        className='w-full py-2 pr-10 pl-3 rounded-md border-gray-300 ring-1 ring-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-200'
      />
      <div className='absolute inset-y-0 right-0 flex items-center justify-center pr-3'>
        <svg
          className='w-5 h-5 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-4.873-4.873M15.414 12.225A5.5 5.5 0 1112 6.5a5.5 5.5 0 013.414 5.725z'
          />
        </svg>
      </div>
    </div>
  );
}
