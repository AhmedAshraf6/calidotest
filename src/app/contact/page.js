import React from 'react';
import HeroLanding from '@/components/shared-component/HeroLanding';
import WhyUsBox from '@/components/shared-component/WhyUsBox';
import { FaLocationDot } from 'react-icons/fa6';
import Map from '@/components/contact/Map';
import ContactForm from '@/components/contact/ContactForm';

export default function page() {
  return (
    <div>
      <HeroLanding
        title='Contact Us'
        paragraph=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          libero, nemo molestias, odit in, iusto culpa eaque labore maxime
          facilis rem iste? Qui, quibusdam est nisi natus suscipit nostrum iure?'
      />
      <div className=' mt-5 sm:mt-16'>
        <div className='container'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6'>
            <WhyUsBox
              Icon={FaLocationDot}
              title='Physical Address'
              paragraph='Egypt, giza, 1221str'
            />
            <WhyUsBox
              Icon={FaLocationDot}
              title='Physical Address'
              paragraph='Egypt, giza, 1221str'
            />
            <WhyUsBox
              Icon={FaLocationDot}
              title='Physical Address'
              paragraph='Egypt, giza, 1221str'
            />
            <WhyUsBox
              Icon={FaLocationDot}
              title='Physical Address'
              paragraph='Egypt, giza, 1221str'
            />
          </div>
        </div>
      </div>
      {/* Contact Us*/}
      <div className='mt-5 sm:mt-28'>
        <div className='container'>
          <div className='grid md:grid-cols-2 gap-x-5 gap-y-4'>
            <Map />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
