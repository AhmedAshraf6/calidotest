import Slider from '@/components/home/Slider';
import React from 'react';

import Sale from '@/components/home/Sale';
import Product from '@/components/shared-component/Product';
import { BaseUrl } from '@/util/constants';
import { toast } from 'react-toastify';
// import geoip from 'geoip-lite';
async function getData() {
  const res = await fetch(`${BaseUrl}/products`);
  if (!res.ok) {
    toast.error('error happen');
  }

  return res.json();
}
async function getCategoriesProducts() {
  const res = await fetch(`${BaseUrl}/categories`);
  if (!res.ok) {
    toast.error('error happen');
  }

  return res.json();
}
async function getUserLocation() {
  const res = await fetch('https://ipapi.co/json/');

  if (!res.ok) {
    toast.error('user location error');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  // Categories
  const categoriesProducts = await getCategoriesProducts();
  const userLoc = await getUserLocation();
  return (
    <div>
      <Slider />

      {/* Featured Product */}
      {/* <div className='mt-8 sm:mt-24'>
        <div className='container '>
          <h1 className='head mb-3 sm:mb-4'>Featured Product</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur.</p>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div> */}

      {/* Categories */}
      {categoriesProducts?.results?.rows.map((category) => {
        return (
          <div className='my-8 sm:mt-24' key={category.id}>
            <div className='container '>
              <h1 className='head mb-3 sm:mb-4'>{category?.name}</h1>

              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
                {category?.products.map((product) => {
                  return <Product {...product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* Sale */}
      <Sale />
    </div>
  );
}
