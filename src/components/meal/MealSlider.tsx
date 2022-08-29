import { useRouter } from 'next/router';
import { useState } from 'react';

import { IMeal } from '@/lib/types/the-meal-db.types';

import Container from '@/components/SectionContainer';

import MealItem from './MealItem';
import PrevNextButtons from '../PrevNextButton';
import Title from '../Title';

const MealSlider = ({ meals }: { meals: IMeal[] }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const router = useRouter();

  return (
    <section className='w-full my-5'>
      <div className='w-full flex items-center justify-between'>
        <Title title='Our fresh & healthy fruits' />
        <PrevNextButtons
          onNext={() => setScrollValue(() => 1000)}
          onPrev={() => setScrollValue(() => -1000)}
        />
      </div>
      <Container<IMeal>
        className='bg-containerbg'
        scrollOffset={scrollValue}
        items={meals}
        renderItem={(item) => (
          <MealItem
            onClick={() => router.push(`/meals/${item.idMeal}`)}
            key={item.idMeal}
            item={item}
          />
        )}
      />
    </section>
  );
};

export default MealSlider;
