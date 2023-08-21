'use client';
import React, { useState } from 'react';
import InputField from '../shared-component/InputField';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [data, setData] = useState({
    firstname: '',
    email: '',
    subject: '',
    message: '',
  });
  const { firstname, email, subject, message } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='flex flex-col  gap-y-5'>
          <h2 className='head '>We wouid Love To Hear From U</h2>
          <InputField
            label='First & Last Name'
            type='text'
            name='firstname'
            handleChange={handleChange}
            value={firstname}
            requried='requried'
          />
          <InputField
            label='Email Address'
            type='email'
            name='email'
            handleChange={handleChange}
            value={email}
            requried='requried'
          />
          <InputField
            label='Subject'
            type='text'
            name='subject'
            handleChange={handleChange}
            value={subject}
          />
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' for='message'>
              Comment Or Message
              <span className='text-[#ff000080] text-lg'>*</span>
            </label>
            <textarea
              className='form-textarea w-full  border-2 py-3 px-2 border-gray-300 focus:border-yellow-400 h-40 outline-none'
              id='message'
              name='message'
              handleChange={handleChange}
              value={message}
            ></textarea>
          </div>
          <button type='submit' className='btn-primary self-start'>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
