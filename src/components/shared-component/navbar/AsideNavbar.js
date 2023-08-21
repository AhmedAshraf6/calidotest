'use client';
import { useMainContext } from '@/contexts/MainContext';
import { navLiks } from '@/util/constants';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import NavLink from './NavLink';
import Link from 'next/link';
export default function AsideNavbar() {
  const { navbar, detectNavbar } = useMainContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <aside
        className={`fixed ${
          navbar && 'visiblenav'
        } h-[100%] bg-black/80 top-0  w-[70%]  z-10 asidenav`}
      >
        <div className='flex justify-end'>
          <AiOutlineClose
            className='text-2xl  cursor-pointer text-white m-3 hover:text-primary'
            onClick={() => detectNavbar(false)}
          />
        </div>
        <ul className='flex flex-col items-start gap-y-5 px-3 text-white'>
          {navLiks && navLiks.map((nav) => <NavLink {...nav} key={nav.id} />)}

          {/* Dropdown */}
          <div className='relative inline-block '>
            <div>
              <button
                type='button'
                className='inline-flex  items-center w-full rounded-md  font-bold   text-white hover:text-primary smooth '
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
                className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 bg-black text-white'
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
        </ul>
      </aside>
    </>
  );
}
