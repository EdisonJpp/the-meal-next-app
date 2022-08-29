import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import React, { useMemo } from 'react';

import { filterMealsByCategory, getMeal } from '@/lib/services/the-meal-db';
import { IMeal } from '@/lib/types/the-meal-db.types';

type Props = {
  meal: IMeal;
};

function getItems(meal: IMeal, key = 'strIngredient') {
  const rawMeal = { ...meal } as { [key: string]: string };
  const rawIngredients = [];

  let count = 1;

  while (rawMeal[`${key}${count}`]) {
    rawIngredients.push(rawMeal[`strIngredient${count}`]);
    count += 1;
  }

  return rawIngredients.filter(Boolean);
}

export default function MealDetail({ meal }: Props) {
  const ingredients = useMemo(() => getItems(meal), [meal]);
  const measures = useMemo(() => getItems(meal, 'strMeasure'), [meal]);

  return (
    <div className='flex justify-center'>
      <section className='text-gray-700 body-font overflow-hidden bg-cardOverlay backdrop-blur-md rounded-lg w-11/12	 md:w-10/12	 shadow-md	'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='md:w-96 w-full object-cover object-center rounded'>
              <Image
                alt='ecommerce'
                width={'500px'}
                height={'500px'}
                layout='responsive'
                src={meal.strMealThumb}
              />
            </div>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {meal.strTags}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
                {meal.strMeal} - $58.00
              </h1>
              <div className='space-y-2 mt-2'>
                <div className='flex items-center space-x-2 border-b '>
                  <p className=' text-md  font-semibold w-1/4 '>Area:</p>
                  <p className=''>{meal.strArea}</p>
                </div>

                <div className='flex items-center space-x-2 border-b '>
                  <p className=' text-md  font-semibold  w-1/4'>Category:</p>
                  <p className=''>{meal.strCategory}</p>
                </div>

                <div className='flex items-center space-x-2 border-b '>
                  <p className=' text-md  font-semibold  w-1/4'>Meal video:</p>
                  <a
                    className='text-blue-500'
                    href={meal.strYoutube}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Ver
                  </a>
                </div>
              </div>
              <div className=' items-center mt-2 border-b '>
                <p className=' text-md  font-semibold  w-1/4'>Ingredients:</p>
                <p className=''>{ingredients.join(', ')}</p>
              </div>

              <div className=' items-center mt-2 border-b '>
                <p className=' text-md  font-semibold  w-1/4'>Measures:</p>
                <p className=''>{measures.join(', ')}</p>
              </div>

              <div className='text-end mt-2'>
                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className='text-2xl font-semibold mt-4 border-b mb-3'>
                Details
              </h4>

              <h4 className='text-lg font-semibold'>Instructions:</h4>
              <p className='leading-relaxed'>{meal.strInstructions}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const meals = await filterMealsByCategory('Beef');

  return {
    paths: meals.map((item) => ({ params: { id: item.idMeal } })),
    fallback: true, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params?.id) {
    return {
      redirect: '/',
    };
  }

  const meal = await getMeal(context.params?.id as string);

  return {
    props: {
      meal,
    },
  };
}
