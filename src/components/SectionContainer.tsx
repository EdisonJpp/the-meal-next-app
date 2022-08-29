// import { SingleFoodItem } from "../FoodItem";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { IMeal } from '@/lib/types/the-meal-db.types';

import Loader from '@/components/Loader';
import NotFound from '@/components/NotFound';

// import { MealItem } from './meal';

function Container<T = IMeal>({
  scrollOffset,
  col,
  items,
  className,
  isLoading,
  renderItem,
}: {
  scrollOffset: number;
  col?: boolean;
  isLoading?: boolean;
  items: T[];
  // eslint-disable-next-line
  renderItem: (item: T) => JSX.Element;
  className?: string;
}) {
  /** ----- Ref -------  */
  const containerRef = useRef<HTMLDivElement>(null);

  /** ----- Effects -------  */
  useEffect(() => {
    if (typeof window !== 'undefined' && null !== containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [scrollOffset]);

  return (
    <>
      {isLoading ? <Loader progress={'Fetching Food Items.....'} /> : null}

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`${className} w-full my-12 flex items-center ${
          (!items || col) && 'justify-center'
        }   min-h-[200px] gap-4  px-2 ${
          !col
            ? 'overflow-x-scroll scrollbar-hidden scroll-smooth'
            : 'overflow-x-hidden flex-wrap'
        }`}
      >
        {items && items.map(renderItem)}

        {items && items.length <= 0 && (
          <NotFound text='No Food Items Available ' />
        )}
      </motion.div>
    </>
  );
}

export default Container;
