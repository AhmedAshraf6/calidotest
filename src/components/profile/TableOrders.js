import React from 'react';

export default function TableOrders() {
  return (
    <table className='table w-full '>
      <thead className='whitespace-nowrap border-b-2 border-gray-200 '>
        <tr>
          <th className='px-4 pb-4 text-left'>Order</th>
          <th className='px-4 pb-4 text-left'>Date</th>
          <th className='px-4 pb-4 text-left'>Status</th>
          <th className='px-4 pb-4 text-left'>Total</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            #921
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            June 7,2000
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            Processing
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            70Egp For 1 Product
          </td>
        </tr>
        <tr>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            #921
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            June 7,2000
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            Processing
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            70Egp For 1 Product
          </td>
        </tr>
        <tr>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            #921
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            June 7,2000
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            Processing
          </td>
          <td className='px-4 py-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            70Egp For 1 Product
          </td>
        </tr>
      </tbody>
    </table>
  );
}
