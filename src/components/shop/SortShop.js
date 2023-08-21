'use client';
import { useFilterContext } from '@/contexts/FilterContext';
import React from 'react';
import SelectBox from '../shared-component/SelectBox';

export default function SortShop() {
  const {
    isLoading,
    handleChangeFunc,
    sort,
    sortOptions,
    ClearFilter,
    totalProducts,
    products,
  } = useFilterContext();
  const handleChange = (e) => {
    if (isLoading) return;
    handleChangeFunc({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ClearFilter();
  };
  return (
    <form className='flex flex-col gap-3 flex-wrap ' onSubmit={handleSubmit}>
      <h2 className='mb-3 text-dark text-md sm:text-2xl '>
        {products.length} product{products.length > 1 && 's'} found
      </h2>
      <div className='relative'>
        <SelectBox
          name='order'
          value={sort}
          handleChange={handleChange}
          options={sortOptions}
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
            <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z' />
          </svg>
        </div>
      </div>
      <button type='submit' className='btn-primary'>
        clear filter
      </button>
    </form>
  );
}
