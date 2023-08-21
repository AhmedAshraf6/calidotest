import React from 'react';

export default function InputField({
  label,
  labelfor,
  type,
  name,
  value,
  handleChange,
  requried,
}) {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-bold mb-2' htmlFor={name}>
        {label}{' '}
        {requried && <span className='text-[#ff000080] text-lg'>*</span>}
      </label>
      <input
        className='form-input w-full border-2 py-1 sm:py-3 px-1 sm:px-2 border-gray-300 focus:border-yellow-400 outline-none'
        id={labelfor}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
