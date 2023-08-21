import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <footer className='bg-black/90 mt-3 text-white py-5 sm:py-16 mt-8 sm:mt-24'>
        <div className='container'>
          <div className='flex justify-between items-start flex-wrap gap-3'>
            <div className='flex flex-col gap-y-3'>
              <h3 className='text-lg mb-3 '>Quick Links</h3>
              <span className='underline'>Introduction</span>
              <span className='underline'>Introduction</span>
              <span className='underline'>Introduction</span>
            </div>
            <div className='flex flex-col gap-y-3'>
              <h3 className='text-lg mb-3 '>Important Links</h3>
              <span className='underline'>Home </span>
              <span className='underline'> About</span>
              <span className='underline'>Contact</span>
            </div>
            <div className='flex flex-col gap-y-5'>
              <h3 className='text-lg mb-3'>Contact Info</h3>
              <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center p-2 rounded-full border border-white'>
                  <FaLocationDot />
                </div>
                <div>
                  <span>Address</span>
                  <span>Egypt, cairo</span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center p-2 rounded-full border border-white'>
                  <BsFillTelephoneFill />
                </div>
                <div>
                  <span>Phone</span>
                  <span>492-12-120</span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex justify-center items-center p-2 rounded-full border border-white'>
                  <MdEmail />
                </div>
                <div>
                  <span>Email:</span>
                  <span>co@co.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='py-3 sm:py-5 bg-black/95 text-white'>
        <div className='container'>
          <h5>Copyright &copy; 2023 - By prolighthub</h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
