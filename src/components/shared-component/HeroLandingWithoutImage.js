import React from 'react';

export default function HeroLandingWithoutImage({ title }) {
  return (
    <div className='bg-gray-100 bg-center min-h-[30vh] flex flex-col justify-center '>
      <div className='container h-100'>
        <h1 className='text-lg sm:text-xl font-semibold text-center'>
          {title}
        </h1>
      </div>
    </div>
  );
}
