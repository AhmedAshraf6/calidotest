import Sale from '@/components/home/Sale';
import HeroLanding from '@/components/shared-component/HeroLanding';
import WhyUsBox from '@/components/shared-component/WhyUsBox';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsAward } from 'react-icons/bs';
export default function page() {
  return (
    <div>
      <HeroLanding
        title='About Us'
        paragraph=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          libero, nemo molestias, odit in, iusto culpa eaque labore maxime
          facilis rem iste? Qui, quibusdam est nisi natus suscipit nostrum iure?'
      />
      <div className=' mt-5 sm:mt-16'>
        <div className='container'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6'>
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
          </div>
          {/* ABout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 sm:mt-16 gap-5'>
            <div>
              <h2 className='head mb-3 sm:mb-5'>Lorem ipsum dolor sit.</h2>
              <p className='paragraph my-4 sm:my-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                laborum, atque voluptatum exercitationem quis repellat quaerat
                nesciunt voluptate veniam iste!
              </p>
              <p className='paragraph my-4 sm:my-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                laborum, atque voluptatum exercitationem quis repellat quaerat
                nesciunt voluptate veniam iste! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Debitis, dignissimos.
              </p>
              <Link className='btn-primary my-4 sm:my-8' href='/shop'>
                See collection
              </Link>
            </div>
            <div>
              <Image
                src='/image-3.png'
                width='500'
                height='500'
                className='rounded-lg object-cover w-full h-[400px]'
              />
            </div>
          </div>
          <Sale />
        </div>
      </div>
    </div>
  );
}
