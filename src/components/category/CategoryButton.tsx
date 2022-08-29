import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { ICategory } from '@/lib/types/the-meal-db.types';

const Button = ({
  category,
  filter,
  setFilter,
}: {
  category: ICategory;
  filter: string;
  // eslint-disable-next-line
  setFilter: (str: string) => void;
}) => {
  /** ------- Variables -------  */
  const isEqual = useMemo(
    () => category.strCategory === filter,
    [filter, category]
  );

  return (
    <motion.div
      onClick={() => setFilter(category.strCategory)}
      whileTap={{ scale: 1.1 }}
      className={`group ${
        isEqual
          ? 'hover:bg-btnOverlay bg-cartNumBg'
          : 'bg-btnOverlay hover:bg-cartNumBg'
      } w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out`}
    >
      <div
        className={`w-10 h-10 rounded-full ${
          isEqual
            ? 'group-hover:bg-cartNumBg bg-btnOverlay'
            : 'bg-cartNumBg group-hover:bg-btnOverlay'
        }  flex items-center justify-center`}
      >
        <span
          className={`${
            isEqual
              ? 'text-textColor group-hover:text-btnOverlay'
              : 'group-hover:text-textColor text-btnOverlay'
          } text-lg`}
        >
          <motion.img
            src={
              category.strCategoryThumb ||
              'https://cdn.imgbin.com/0/9/6/imgbin-meal-preparation-healthy-diet-food-chicken-salad-W2z6cAzc9q9N2SVFz0sxfks79.jpg'
            }
            className='h-14 w-14  rounded-full object-contain '
          />
        </span>
      </div>
      <p
        className={`text-base ${
          isEqual
            ? 'group-hover:text-textColor text-white'
            : 'text-textColor group-hover:text-white'
        } `}
      >
        {category.strCategory}
      </p>
    </motion.div>
  );
};

export default Button;
