import Image from 'next/image';
import React from 'react';

import NotFoundImg from '@/assets/img/NotFound.svg';

const NotFound = ({ text }: { text: string }) => {
  return (
    <div className='w-full p-5 flex flex-col items-center gap-4 justify-center'>
      <Image src={NotFoundImg} alt='empty cart' height={340} />
      <p className='text-textColor  font-semibold'>{text}</p>
    </div>
  );
};

export default NotFound;
