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
    <div className='w-full px-16 py-16 flex flex-col gap-8 justify-center
    md-max-4:px-8
    
    '>
        <div className='flex justify-between px-0
        md-max-4:px-0
        items-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-heading_1 font-semibold text-[52px] text-[#333333]
            md-max-2:text-[42px]
            md-max-3:text-[30px]
            md-max-4:text-[24px]
            '>
                New Arrival
            </h1>
            <p className='text-[20px]
            md-max-2:text-[18px]
            md-max-3:text-[16px]
            md-max-4:text-[14px]
            text-[#666666]'>Be the first to have the first-class product</p>
          </div>
          <div className='flex gap-4 text-[#666666]
          md-max-3:gap-2
          '>
              <button onClick={previousSlide} className='bg-gray-200 p-4 md-max-3:p-2 rounded-full transition-all duration-500 hover:bg-[#E7CEC0] hover:text-black'>
                <MdArrowBack size={24} />
              </button>
              <button onClick={nextSlide} className='bg-gray-200 p-4 md-max-3:p-2 rounded-full transition-all duration-500 hover:bg-[#E7CEC0] hover:text-black'>
                <IoMdArrowForward size={24} />
              </button>
          </div>
        </div>
        <ProductNew sliderRef={sliderRef} />
        <Link to={path.NEWS} 
        className='text-center mx-auto my-16
        md-max-2:py-8 md-max-2:my-8
        md-max-4:py-4 md-max-4:my-4
        '>  
            <div className='
            transition-all duration-500
            border border-white
            hover:bg-white hover:text-[#658C4A] hover:border hover:border-[#658C4A]
            px-6 py-4 text-[18px]
            
            md-max-4:px-4 md-max-4:py-2
            md-max-4:text-[16px]
            md-max-5:text-[14px]            
            bg-[#658C4A] w-[200px] text-white rounded-full font-bold'> See More </div>
        </Link>
    </div>
  )
}

export default NewArrival