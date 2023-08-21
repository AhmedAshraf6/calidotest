'use client';
import AccountFormEdit from '@/components/profile/AccountFormEdit';
import HeroLanding from '@/components/shared-component/HeroLandingWithoutImage';
import ProfileLinksContainer from '@/components/profile/ProfileLinksContainer';
import React, { useState } from 'react';
import AllShippingDetails from '@/components/profile/AllShippingDetails';
import AddShippingForm from '@/components/profile/AddShippingForm';
import customFetch from '@/util/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function ShippingDetails() {
  const token = Cookies.get('calidoUser');

  // const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState([]);
  const getShippingDetails = async () => {
    try {
      const response = await customFetch('/shippingDetails', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setShippingData(response?.data?.results?.rows);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <HeroLanding title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid md:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 md:col-span-1'>
              <ProfileLinksContainer />
            </div>
            <div className='col-span-3 md:col-span-2'>
              <div className='grid grid-cols-1  gap-5'>
                <AllShippingDetails
                  getShippingDetails={getShippingDetails}
                  shippingData={shippingData}
                />
                <AddShippingForm getShippingDetails={getShippingDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
