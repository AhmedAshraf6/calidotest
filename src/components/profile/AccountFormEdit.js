'use client';
import React, { useEffect, useState } from 'react';
import InputField from '@/components/shared-component/InputField';
import { toast } from 'react-toastify';
import { useMainContext } from '@/contexts/MainContext';
import customFetch from '@/util/axios';
import Cookies from 'js-cookie';

export default function AccountFormEdit() {
  const { user } = useMainContext();
  const token = Cookies.get('calidoUser');

  const [data, setData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    mail: user?.mail || '',
    phone: user?.phoneNumber?.phone || '',
    old_password: '',
    password: '',
  });
  const { firstName, lastName, mail, phone, old_password, password } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !mail) {
      toast.error('Please Fill required fields');
      return;
    }
    if (old_password || password) {
      if (!old_password || !password) {
        toast.error('Please Fill Out all password fields');
        return;
      }
    }
    let newData = data;
    if (!password) {
      delete newData.old_password;
      delete newData.password;
    }
    try {
      const response = await customFetch.put('/users/me', newData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (phone) {
        if (user?.phoneNumber?.phone) {
          editPhone();
        } else {
          addPhone();
        }
        return;
      }
      toast.success('your data updated succesfully');
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    return;
  };
  const addPhone = async () => {
    try {
      const response = await customFetch.post(
        '/phone',
        { phone },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('your data updated succesfully and phone addedd');
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const editPhone = async () => {
    try {
      const response = await customFetch.put(
        `/phone/${user.phoneNumber.id}`,
        { phone },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('your data updated succesfully and phone editted');
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  // const getPhone = async () => {
  //   try {
  //     const response = await customFetch('/phone', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.log(error);
  //   }
  // };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    setData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      mail: user?.mail || '',
      phone: user?.phoneNumber?.phone || '',
      old_password: '',
      password: '',
    });
  }, [user]);
  return (
    <form onSubmit={handleSubmit} className='flex flex-col  gap-y-4 sm:gap-y-8'>
      <div className='grid sm:grid-cols-2 gap-x-3'>
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
      </div>

      <InputField
        label='Email '
        type='email'
        name='mail'
        handleChange={handleChange}
        value={mail}
        requried='requried'
      />
      <InputField
        label='Phone Number'
        type='text'
        name='phone'
        handleChange={handleChange}
        value={phone}
        requried='requried'
      />

      <div className='mx-0 sm:mx-4'>
        <h2 className='text-lg font-bold '>Password change</h2>
        <div className='mx-0 sm:mx-2 mt-3 sm:mt-5'>
          <InputField
            label='Current password (leave blank to leave inchanged)'
            type='password'
            name='old_password'
            handleChange={handleChange}
            value={old_password}
          />
          <InputField
            label='New password (leave blank to leave inchanged)'
            type='password'
            name='password'
            handleChange={handleChange}
            value={password}
          />
          {/* <InputField
            label='Confirm new password'
            type='password'
            name='confirmnewpass'
            handleChange={handleChange}
            value={confirmnewpass}
          /> */}
        </div>
      </div>
      <button type='submit' className='btn-primary self-start'>
        Edit changes
      </button>
    </form>
  );
}
