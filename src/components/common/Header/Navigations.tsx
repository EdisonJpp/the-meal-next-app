// import React from 'react'
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';

const Navigations = ({ direction }: { direction?: string }) => {
  const handleToggleCart = () => null;

  return (
    <div className='flex items-center gap-8'>
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`flex items-center gap-8 ${direction && direction}`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className='md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
        >
          <p>Home</p>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className='md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
        >
          Menu
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className='md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
        >
          Services
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className='md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
        >
          About Us
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className='md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
        >
          Contact Us
        </motion.li>
      </motion.ul>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className='relative flex items-center justify-center text-textColor'
        onClick={handleToggleCart}
      >
        <MdShoppingBasket className='text-2xl cursor-pointer' />
      </motion.div>
    </div>
  );
};

export default Navigations;
