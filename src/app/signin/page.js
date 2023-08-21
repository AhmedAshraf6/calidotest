'use client';
import customFetch from '@/util/axios';
import { addUserToLocalStorage } from '@/util/localstorage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useMainContext } from '@/contexts/MainContext';
import SignInWithGoogle from '@/components/signinwithgoogle/SignInWithGoogle';

export default function SignIn() {
  const { AddUser, user } = useMainContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [data, setData] = useState({
    mail: user?.mail || '',
    password: user?.password || '',
  });
  const { mail, password } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mail || !password) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    try {
      setLoading(true);
      const response = await customFetch.post('/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // console.log(response);
      Cookies.set('calidoUser', response?.data?.token, {
        expires: 1,
        secure: true,
      });
      const newData = {
        ...response?.data?.user,
        phoneNumber: response?.data?.phoneNumber[0],
      };
      AddUser(newData);
      toast.success('Login success');
      router.push('/profile');
    } catch (error) {
      toast.error(error.message);
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
          <h2 className='mt-10 text-center text-base sm:text-2xl font-bold leading-5 sm:leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-5 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='mail'
                  type='email'
                  value={mail}
                  autoComplete='email'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-2'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between flex-wrap gap-x-3'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <Link
                    href='/forgetpass'
                    className='font-semibold text-primary'
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  autoComplete='current-password'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6  px-2'
                />
              </div>
            </div>

            <div>
              <button type='submit' className='btn-primary w-full '>
                {loading ? <span>loading...</span> : <span> Sign in</span>}
              </button>
            </div>
          </form>
          <SignInWithGoogle />
          <p className='mt-5 sm:mt-10 text-center text-sm text-gray-500'>
            Not a member?
            <Link
              href='/signup'
              className='font-semibold leading-6 text-primary mx-2 whitespace-nowrap'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
