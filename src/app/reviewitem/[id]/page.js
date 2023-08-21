import AllReviews from '@/components/reviewItem/AllReviews';
import ReviewForm from '@/components/reviewItem/ReviewForm';
import Info from '@/components/singleitem/Info';
import LinkComponent from '@/components/singleitem/LinkComponent';
import Slider from '@/components/singleitem/Slider';
import React from 'react';

export default function page() {
  const images = [
    'https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div className='mt-8 sm:mt-24'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 '>
          <Slider images={images} />
          <Info />
        </div>
        <div className='flex justify-center gap-4 border-b-2 border-gray-200 mt-8 sm:mt-24'>
          <LinkComponent href={`/singleitem/asd`}> Description</LinkComponent>
          <LinkComponent href={`/reviewitem/asd`}> Review(0)</LinkComponent>
        </div>
        <div className='grid md:grid-cols-2 gap-x-10 gap-y-4 mt-4 sm:mt-8'>
          <AllReviews />
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}
