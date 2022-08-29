import { motion } from 'framer-motion';

import { IMeal } from '@/lib/types/the-meal-db.types';

const MealItem = ({
  item,
  onClick,
}: {
  item: IMeal;
  col?: boolean;
  onClick?: () => void;
}) => {
  const { strMeal, strMealThumb, strTags } = item;

  return (
    <motion.div
      onClick={onClick || undefined}
      whileTap={{ rotate: [0, -1, 1, -1, 0] }}
      className={` w-[320px] min-w-[320px] md:w-[300px] md:min-w-[300px]  my-12 h-[220px] bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer
      `}
    >
      <div className='w-full flex items-center justify-between'>
        <motion.img
          whileHover={{ scale: 1.1 }}
          className='w-40 h-32 md:w-48 md:h-32 -mt-8 object-cover  cursor-pointer rounded-2xl'
          alt={strMeal}
          src={strMealThumb}
        />
      </div>
      <div className='flex items-end justify-end flex-col mt-2'>
        <p className='text-textColor font-semi-bold text-lg'>{strMeal}</p>
        <p className='mt-1 text-sm text-gray-500'>{strTags} </p>
        <div className='flex items-center justify-between gap-8 '>
          <p className='text-base text-headingColor font-semibold'>
            <span className='text-sm text-red-600'>₵</span> 102,232
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MealItem;
