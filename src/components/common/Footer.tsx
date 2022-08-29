import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import logo from '@/assets/img/Chef1.png';

const Footer = () => {
  return (
    <footer className='p-4 bg-primary sm:p-6 w-full'>
      <div className='flex justify-center md:justify-start items-center'>
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          className='mb-3 md:mb-0'
        >
          <div className='w-10 md:w-36 object-contain'>
            <Image src={logo} alt='Logo' />
          </div>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-headingColor'>
            The Faster Food{' '}
          </span>
        </motion.div>
      </div>
      <hr className='my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <span className='text-sm text-gray-500 text-center dark:text-gray-400'>
          © 2022 PadillaCore™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
