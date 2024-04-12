import React,{ useRef, useEffect } from 'react'
import ProductNew from './ProductNew'
import icons from '../../Ulities/icons'
import { Link } from 'react-router-dom'
import path from '../../Ulities/path'

const NewArrival = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }, []);
  const {IoMdArrowForward, MdArrowBack} = icons

  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };


  return (
    <div className='w-full px-16 py-16 flex flex-col gap-8 justify-center'>
        <div className='flex justify-between px-8 items-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-heading_1 font-semibold text-[52px] text-[#333333]'>
                New Arrival
            </h1>
            <p className='text-[20px] text-[#666666]'>Be the first to have the first-class product</p>
          </div>
          <div className='flex gap-4 text-[#666666]'>
              <button onClick={previousSlide} className='bg-gray-200 p-4 rounded-full transition-all duration-500 hover:bg-[#E7CEC0] hover:text-black'>
                <MdArrowBack size={24} />
              </button>
              <button onClick={nextSlide} className='bg-gray-200 p-4 rounded-full transition-all duration-500 hover:bg-[#E7CEC0] hover:text-black'>
                <IoMdArrowForward size={24} />
              </button>
          </div>
        </div>
        <ProductNew sliderRef={sliderRef} />
        <Link to={path.NEWS} 
        className='text-center mx-auto my-16'>  
            <div className='
            transition-all duration-500
            border border-white
            hover:bg-white hover:text-[#658C4A] hover:border hover:border-[#658C4A]
            px-6 py-4 text-[18px] bg-[#658C4A] w-[200px] text-white rounded-full font-bold'> See More </div>
        </Link>
    </div>
  )
}

export default NewArrival