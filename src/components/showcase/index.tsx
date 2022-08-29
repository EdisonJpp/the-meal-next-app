import React from 'react';

import { IMeal } from '@/lib/types/the-meal-db.types';

import Left from './Left';
import Right from './Right';

interface IShowCase {
  fourRandomMeals: IMeal[];
}

const Showcase = ({ fourRandomMeals }: IShowCase) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <Left />
      <Right fourRandomMeals={fourRandomMeals} />
    </section>
  );
};

export default Showcase;
