import React from 'react';

export default function HeroLanding({ title, paragraph }) {
  return (
    <div className='hero-landing bg-cover bg-no-repeat bg-center min-h-[60vh] flex flex-col justify-center '>
      <div className='container h-100'>
        <h1 className='head text-center !text-2xl sm:!text-5xl mb-5'>
          {title}
        </h1>
        <p className='paragraph sm:w-[600px] mx-auto'>{paragraph}</p>
      </div>
    </div>
  );
}
