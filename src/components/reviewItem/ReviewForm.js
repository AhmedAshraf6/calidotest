import React from 'react';
import { StarRating } from '@/components/shared-component/StarRating';

export default function ReviewForm() {
  return (
    <div>
      <h2 className='text-base sm:text-xl font-semibold leading-7 sm:leading-9	'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        expedita?
      </h2>
      <form className='flex flex-col gap-2 mt-3 sm:mt-5'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className=' text-secondary'>
            Your Rating <span className='text-red-600 '>*</span>
          </span>
          <StarRating />
        </div>
        <div className='mt-3 sm:mt-5 relative'>
          <textarea
            className='form-textarea w-full  border-2 py-3 px-2 border-gray-300 focus:border-yellow-400 h-40 outline-none'
            name='ratecomment'
            placeholder='Your review '
          ></textarea>
          <span className='absolute text-red-600 text-lg left-[100px] top-[9px]'>
            *
          </span>
        </div>
      </form>
      <button className=' btn-primary mt-5'>Submit</button>
    </div>
  );
}
