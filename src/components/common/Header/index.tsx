import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import Logo from '@/assets/img/Chef1.png';

import MobileNav from './mobile-nav';
import Navigations from './Navigations';

const Header = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const router = useRouter();

  return (
    <header className='w-screen fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16'>
      {/* Tablet and Desktop */}
      <div className='hidden md:flex w-full justify-between itesm-center'>
        <motion.div
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.1 }}
          className='flex items-center gap-2 cursor-pointer'
        >
          <div className='md:w-6 lg:w-8 object-cover'>
            <Image src={Logo} alt='Logo' />
          </div>
          <p className='text-headingColor md:text-lg lg:text-xl font-bold'>
            The Fastest Food
          </p>
        </motion.div>

        <Navigations />
      </div>

      {/* Mobile */}
      <motion.div
        className='flex md:hidden w-full p-0 items-center justify-between'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        {isOpenMobileNav ? (
          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        ) : (
          <div className='p-5 flex items-center justify-between w-full'>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=' flex items-center justify-center'
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className='text-headingColor text-4xl' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex items-center gap-2 cursor-pointer'
            >
              <div className='w-8 object-cover'>
                <Image src={Logo} alt='Logo' />
              </div>
              <p className='text-headingColor text-xl font-bold'>
                The Fastest Food
              </p>
            </motion.div>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
