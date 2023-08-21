'use client';
import customFetch from '@/util/axios';
import { BaseUrl } from '@/util/constants';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMainContext } from '@/contexts/MainContext';

export default function AllShippingDetails({
  getShippingDetails,
  shippingData,
}) {
  const { editShippingDetails } = useMainContext();
  const token = Cookies.get('calidoUser');

  useEffect(() => {
    getShippingDetails();
  }, []);
  const deleteShippingDetails = async (id) => {
    try {
      const response = await customFetch.delete(`/shippingDetails/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Deleted succesfully');
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    getShippingDetails();
  };

  if (shippingData.length === 0) {
    return (
      <h1 className='text-xl lg:text-2xl font-bold'>
        No Shippping Details Exist{' '}
      </h1>
    );
  }
  return (
    <div className='overflow-x-auto'>
      <h1 className='text-lg md:text-2xl font-bold text-center'>
        All Shipping Details
      </h1>

      <div className='w-full '>
        <table className='min-w-full bg-white '>
          <thead>
            <tr>
              <th className='py-3  text-start border-b border-gray-200'>
                Country
              </th>
              <th className='py-3   text-start border-b border-gray-200'>
                Address
              </th>
              <th className='py-3   text-center border-b border-gray-200'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {shippingData.map((ship) => {
              const { id, country, address } = ship;
              return (
                <tr key={id}>
                  <td className='text-sm md:text-base py-3 px-2 md:px-4 border-b border-gray-200 whitespace-nowrap'>
                    {country}
                  </td>
                  <td className='text-sm md:text-base py-3 px-2 md:px-4 border-b border-gray-200 whitespace-nowrap'>
                    {address}
                  </td>
                  <td className='py-3 px-2 md:px-4 border-b border-gray-200'>
                    <div className='flex justify-end'>
                      <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 mr-2 rounded'
                        onClick={() =>
                          editShippingDetails({ id, country, address })
                        }
                      >
                        Edit
                      </button>
                      <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded'
                        onClick={() => deleteShippingDetails(id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
