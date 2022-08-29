import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { filterMealsByCategory } from '@/lib/services/the-meal-db';
import { ICategory, IMeal } from '@/lib/types/the-meal-db.types';

import Button from './CategoryButton';
import { MealItem } from '../meal';
import PrevNextButtons from '../PrevNextButton';
import Container from '../SectionContainer';
import Title from '../Title';

export default function MealsByCategory({
  categories,
}: {
  categories: ICategory[];
}) {
  //** ---- States ------  */
  const [state, setState] = useState({
    meals: [] as IMeal[],
    strCategory: '',
    isLoading: false,
    scrollValue: 0,
  });

  //** ---- Hooks ------  */
  const router = useRouter();

  //** ---- Effects ------  */

  useEffect(() => {
    const fn = async () => {
      // first by default
      const first = categories.at(0)?.strCategory;
      if (!state.strCategory) {
        setState((curr) => ({ ...curr, strCategory: first || '' }));
        return;
      }

      setState((curr) => ({ ...curr, isLoading: true }));
      const meals = await filterMealsByCategory(state.strCategory);
      setState((curr) => ({ ...curr, meals, isLoading: false }));
    };

    fn();
  }, [state.strCategory, categories]);

  return (
    <>
      <section className='w-full my-5' id='menu'>
        <div className=' flex items-center justify-between'>
          <Title title="meals' Categories" />
          <PrevNextButtons
            onNext={() => setState((curr) => ({ ...curr, scrollValue: 1000 }))}
            onPrev={() => setState((curr) => ({ ...curr, scrollValue: -1000 }))}
          />
        </div>

        <Container<ICategory>
          scrollOffset={state.scrollValue}
          items={categories}
          renderItem={(category) => (
            <Button
              key={category.idCategory}
              category={category}
              filter={state.strCategory}
              setFilter={(str: string) =>
                setState((curr) => ({ ...curr, strCategory: str }))
              }
            />
          )}
        />

        <Container<IMeal>
          col
          isLoading={state.isLoading}
          className='bg-containerbg'
          scrollOffset={0}
          items={state.meals}
          renderItem={(item) => (
            <MealItem
              onClick={() => router.push(`/meals/${item.idMeal}`)}
              key={item.idMeal}
              item={item}
            />
          )}
        />
      </section>
    </>
  );
}
