import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const PrevNextButtons = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className='hidden md:flex items-center gap-3'>
      <button
        onClick={onPrev}
        className=' transform-gpu scale-100 hover:scale-[1.03] active:scale-[0.97]  w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg'
      >
        <MdChevronLeft className='text-lg text-white' />
      </button>

      <button
        onClick={onNext}
        className=' transform-gpu scale-100 hover:scale-[1.03] active:scale-[0.97] w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg'
      >
        <MdChevronRight className='text-lg text-white' />
      </button>
    </div>
  );
};

export default PrevNextButtons;
