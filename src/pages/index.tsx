import type { NextPage } from 'next';

import { getCategories, getFourRandomMeals } from '@/lib/services/the-meal-db';
import { ICategory, IMeal } from '@/lib/types/the-meal-db.types';

import { MealsByCategory } from '@/components/category';
import { MealSlider } from '@/components/meal';
import Showcase from '@/components/showcase';

interface IHome {
  categories: ICategory[];
  fourRandomMeals: IMeal[];
}

const Home: NextPage<IHome> = ({ categories, fourRandomMeals }) => {
  return (
    <div className='flex w-full h-auto flex-col items-center justify-center md:px-8'>
      <Showcase fourRandomMeals={fourRandomMeals} />
      <MealSlider meals={fourRandomMeals} />
      <MealsByCategory categories={categories} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const categories = await getCategories();
  const fourRandomMeals = await getFourRandomMeals();

  return {
    props: {
      categories,
      fourRandomMeals,
    },
  };
};

export default Home;
