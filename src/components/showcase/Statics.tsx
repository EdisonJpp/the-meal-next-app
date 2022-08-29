import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { IMeal } from '@/lib/types/the-meal-db.types';

const StaticsImages: React.FC<{ items: IMeal[] }> = ({ items }) => {
  const router = useRouter();

  return (
    <div className='w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-4 flex-wrap '>
      {items.map((item) => (
        <div
          onClick={() => router.push(`/meals/${item.idMeal}`)}
          key={item.idMeal}
          className='cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center'
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            src={item.strMealThumb}
            alt='icecream'
            className='w-24 lg:w-36 -mt-10 lg:-mt-20 rounded-2xl '
          />
          <div className='w-24 lg:w-40'>
            <p className='text-sm lg:text-lg font-semibold text-textColor truncate block'>
              {item.strMeal}
            </p>
            <p className='text-xs lg:text-sm text-lightGray font-semibold my-2 lg:my-3 truncate block'>
              {item.strTags}
            </p>
            <p className='text-sm font-semibold text-headingColor'>
              <span className='text-xs text-red-600'>₵</span> 1,023,00
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticsImages;
