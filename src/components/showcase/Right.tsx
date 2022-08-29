import Image from 'next/image';

import { IMeal } from '@/lib/types/the-meal-db.types';

import HeroBg from '@/assets/img/Herobg.png';

import StaticsImages from './Statics';

interface IRight {
  fourRandomMeals: IMeal[];
}

const Right = ({ fourRandomMeals }: IRight) => {
  return (
    <div className='py-2 flex-1 flex items-center relative'>
      <div className='ml-auto lg:h-[550px] h-[420px] object-fill w-full   md:w-[350px]  '>
        <Image src={HeroBg} alt='HeroBg' layout='fill' />
      </div>
      <StaticsImages items={fourRandomMeals} />
    </div>
  );
};

export default Right;
