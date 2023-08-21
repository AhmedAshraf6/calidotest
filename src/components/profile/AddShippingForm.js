'use client';
import React, { useEffect, useState } from 'react';
import InputField from '../shared-component/InputField';
import Cookies from 'js-cookie';
import customFetch from '@/util/axios';
import { toast } from 'react-toastify';
import { useMainContext } from '@/contexts/MainContext';

export default function AddShippingForm({ getShippingDetails }) {
  const token = Cookies.get('calidoUser');
  const {
    shippingDetails,
    handleChangeShipping,
    clearShippingDetails,
    isEditing,
  } = useMainContext();
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    try {
      const res = await customFetch('countries');

      setCountries(() => res?.data.results?.rows);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  // Add Shipping detail
  const AddShippingDetailFunc = async () => {
    try {
      const response = await customFetch.post(
        '/shippingDetails',
        shippingDetails,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Added succesfully');
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    getShippingDetails();
    clearShippingDetails();
  };
  // Edit Shipping detail
  const EditShippingDetailFunc = async () => {
    try {
      const response = await customFetch.put(
        `/shippingDetails/${shippingDetails.id}`,
        shippingDetails,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Editted succesfully');
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    getShippingDetails();
    clearShippingDetails();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!shippingDetails?.address || !shippingDetails?.country) {
      toast.error('Please Fill required fields');
      return;
    }
    if (isEditing) {
      EditShippingDetailFunc();
    } else {
      AddShippingDetailFunc();
    }
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChangeShipping({ name, value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col  gap-y-4 sm:gap-y-6 flex-1'
    >
      <InputField
        label='Address'
        type='text'
        name='address'
        handleChange={handleChange}
        value={shippingDetails?.address}
        requried='required'
      />
      <div className='mb-4'>
        <label
          className='block text-gray-700 font-bold mb-2'
          htmlFor={shippingDetails?.country}
        >
          Country <span className='text-[#ff000080] text-lg'>*</span>
        </label>
        <div className='relative '>
          <select
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            name='country'
            onChange={handleChange}
            required
            value={shippingDetails?.country}
          >
            <option>Choose Country</option>
            {countries?.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
              <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z' />
            </svg>
          </div>
        </div>
      </div>
      <button type='submit' className='btn-primary self-start'>
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </form>
  );
}
