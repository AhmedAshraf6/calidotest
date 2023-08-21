import React from 'react';

export default function SelectBox({ value, name, handleChange, options }) {
  return (
    <select
      className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      value={value}
      name={name}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
