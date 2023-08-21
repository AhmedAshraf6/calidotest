'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const { country_name, city } = response.data;
        setLocation({ country: country_name, city });
        // console.log(response);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {/* {location ? (
        <div>
          Country: {location.country}
          <br />
          City: {location.city}
        </div>
      ) : (
        <div>Loading location...</div>
      )} */}
    </div>
  );
};

export default UserLocation;
