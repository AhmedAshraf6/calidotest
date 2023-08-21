import React from 'react';

export default function Map() {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d221097.920967557!2d31.32265162049348!3d30.018060771707898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVilla%2061%2C%20South%20Academy%20(D)%2C%20First%20New%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1689342445078!5m2!1sen!2seg'
      loading='lazy'
      className='rounded-3xl w-full h-[400px] md:h-[800px]'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
}
