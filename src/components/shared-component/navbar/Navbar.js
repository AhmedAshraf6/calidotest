'use client';
import { navLiks } from '@/util/constants';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import NavLink from './NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='hidden lg:flex justify-center items-center gap-10 my-5'>
      {navLiks && navLiks.map((nav) => <NavLink {...nav} key={nav.id} />)}
      {/* Dropdown */}
      <div className='relative inline-block z-20'>
        <div>
          <button
            type='button'
            className='inline-flex justify-center items-center w-full rounded-md  font-bold   text-gray-700 hover:text-primary smooth '
            id='dropdown-menu-button'
            aria-expanded={isOpen}
            aria-haspopup='true'
            onClick={toggleDropdown}
          >
            Products
            <MdKeyboardArrowDown className='text-lg' />
          </button>
        </div>
        {isOpen && (
          <div
            className='origin-top-right absolute right-0 mt-2 w-56 z-20 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 bg-black text-white'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='dropdown-menu-button'
            tabIndex='-1'
          >
            <div className='py-1' role='none'>
              <a
                href='#'
                className='block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 border-b-2 border-dotted'
                role='menuitem'
                tabIndex='-1'
                id='dropdown-menu-item-1'
              >
                Product 1
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 border-b-2 border-dotted'
                role='menuitem'
                tabIndex='-1'
                id='dropdown-menu-item-2'
              >
                Product 2
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 '
                role='menuitem'
                tabIndex='-1'
                id='dropdown-menu-item-3'
              >
                Product 3
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
