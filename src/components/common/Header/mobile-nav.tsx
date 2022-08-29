import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOutlineRestaurantMenu, MdShoppingBasket } from 'react-icons/md';

import Logo from '@/assets/img/Chef1.png';

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  // eslint-disable-next-line
  setIsOpen: (value: boolean) => void;
}) => {
  const handleToggleCart = () => null;

  return (
    <div className='flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden '>
      <motion.div className='flex items-center justify-between w-screen h-24  px-10'>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='relative flex items-center justify-center text-textColor'
          onClick={handleToggleCart}
        >
          <MdShoppingBasket className='text-4xl cursor-pointer' />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='relative flex items-center justify-center text-textColor'
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineRestaurantMenu className='text-headingColor text-4xl' />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <p className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10'>
          Menu
        </p>
        <p className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10'>
          Services
        </p>
        <p className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10'>
          About
        </p>
        <p className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10'>
          Contact
        </p>
      </div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className='flex items-center gap-2 cursor-pointer'
      >
        <div className='w-16 object-cover'>
          <Image src={Logo} alt='Logo' />
        </div>
        <p className='text-headingColor text-3xl font-bold'>The Fastest Food</p>
      </motion.div>
    </div>
  );
};

export default MobileNav;
