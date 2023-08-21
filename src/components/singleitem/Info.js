import React from 'react';
import InputCounter from './InputCounter';

export default function Info() {
  return (
    <div className='flex flex-col gap-y-6'>
      <h2 className='head text-start'>
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <div className='flex gap-2'>
        <span className='text-lg text-secondary font-bold'>45Egp</span>
        <span className='text-lg text-gray-400  line-through'>80Egp</span>
      </div>
      <p className='paragraph text-start'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero
        accusamus quia est, quasi voluptatibus quo sint voluptatem excepturi
        qui?
      </p>
      <p className='paragraph text-start'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et vero
        voluptatum in, saepe ab tempora optio sint deleniti quis praesentium,
        exercitationem, illum debitis officiis!
      </p>
      <div className='flex  flex-wrap gap-2 border-t-2 border-b-2 border-gray-200  py-5 sm:py-10'>
        <InputCounter />
        <button className='btn-primary flex-1 whitespace-nowrap'>
          Add To Cart
        </button>
      </div>
      <div className='flex gap-2'>
        <span className='fw-bold'>Category:</span>
        <span className='text-secondary'> Casual</span>
      </div>
    </div>
  );
}
