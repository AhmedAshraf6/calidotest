import React from 'react';

export default function WhyUsBox({ Icon, title, paragraph }) {
  return (
    <div className='flex flex-col justify-start items-start gap-y-4'>
      <div className='flex justify-center items-center p-2 rounded-full border bg-primary text-black '>
        <Icon className='text-3xl' />
      </div>
      <h4 className='text-xl font-bold '>{title}</h4>
      <p className='text-secondary text-lg'>{paragraph}</p>
    </div>
  );
}
