'use client';
import InputField from '@/components/shared-component/InputField';
import SelectBox from '@/components/shared-component/SelectBox';
import { useMainContext } from '@/contexts/MainContext';
import customFetch from '@/util/axios';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SignUp() {
  const { AddUser } = useMainContext();
  // Fetch Countries
  // const fetchUserLocation = async () => {
  //   const res = await axios('https://ipapi.co/json/');
  //   const { country_name } = res.data;
  //   setData({ ...data, country: country_name });
  // };
  // const fetchCountries = async () => {
  //   const res = await axios('https://calido.onrender.com/api/v1/countries');
  //   setCountries(res?.data.results?.rows);
  // };
  // useEffect(() => {
  //   fetchUserLocation();
  //   fetchCountries();
  // }, []);
  // const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    // phone: '',
    // country: '',
    // address: '',
    mail: '',
    password: '',
  });
  const { firstName, lastName, mail, password } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mail || !password || !firstName) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    try {
      setLoading(true);
      const response = await customFetch.post('/auth/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      AddUser({ ...response?.data?.user, password });
      toast.success('You are member now');
      router.push('/signin');
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error('your phone number or email is alread exist change it');
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div className='flex  flex-1 flex-col justify-center px-3 py-12 lg:px-8'>
      <div className='container'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {/* <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        /> */}
          <h2 className='mt-10 text-center text-base sm:text-2xl  font-bold leading-5 sm:leading-9 tracking-tight text-gray-900'>
            Sign Up to your account
          </h2>
        </div>

        <div className='mt-5 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <InputField
              label='First Name'
              type='text'
              name='firstName'
              handleChange={handleChange}
              value={firstName}
              requried='requried'
            />
            <InputField
              label='Last Name'
              type='text'
              name='lastName'
              handleChange={handleChange}
              value={lastName}
            />
            <InputField
              label='Email'
              type='email'
              name='mail'
              handleChange={handleChange}
              value={mail}
              requried='requried'
            />
            <InputField
              label='Password'
              type='password'
              name='password'
              handleChange={handleChange}
              value={password}
              requried='requried'
            />
            {/* <InputField
              label='Phone'
              type='text'
              name='phone'
              handleChange={handleChange}
              value={phone}
              requried='requried'
            />
            <InputField
              label='Address'
              type='text'
              name='address'
              handleChange={handleChange}
              value={address}
            /> */}
            {/* <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor={country}
              >
                Country <span className='text-[#ff000080] text-lg'>*</span>
              </label>
              <div className='relative '>
                <select
                  className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                  name='country'
                  onChange={handleChange}
                  required
                  defaultValue={country}
                >
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
            </div> */}
            <button type='submit' className='btn-primary w-full'>
              Sign Up
            </button>
          </form>

          <p className='mt-5 sm:mt-10 text-center text-sm text-gray-500'>
            have account already ?
            <Link
              href='/signin'
              className='font-semibold leading-6 text-primary mx-2 whitespace-nowrap'
            >
              {loading ? 'loading...' : 'Sign In'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
