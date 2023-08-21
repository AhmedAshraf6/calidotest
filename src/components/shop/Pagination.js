'use client';
import { useFilterContext } from '@/contexts/FilterContext';
import React from 'react';

export default function Pagination() {
  const { numOfPages, page, changePage } = useFilterContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };
  return (
    <div className='flex items-center justify-between flex-wrap mt-4 sm:mt-8'>
      <button
        className='text-base sm:text-lg py-2 px-3 flex gap-2 items-center border-2 border-gray-200 hover:border-primary hover:text-primary duration-200'
        onClick={prevPage}
      >
        Prev
      </button>
      {/* Numbers */}
      <div className='flex gap-3'>
        {pages.map((pageNumber) => (
          <span
            className={`text-base sm:text-lg font-semibold border-primary  border-2 py-1 px-3 rounded-md cursor-pointer ${
              page === pageNumber
                ? 'bg-primary text-white '
                : '  hover:border-primary  hover:text-primary '
            }`}
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
        {/* <span className='text-base sm:text-lg font-semibold py-1 px-3 rounded-md  bg-primary text-white cursor-pointer'>
          1
        </span>
        <span className='text-base sm:text-lg font-semibold py-1 px-3 rounded-md  hover:border-2 hover:border-primary  hover:text-primary cursor-pointer'>
          2
        </span> */}
      </div>
      <button
        className='text-base sm:text-lg py-2 px-3 flex gap-2 items-center border-2 border-gray-200 hover:border-primary hover:text-primary duration-200'
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}
