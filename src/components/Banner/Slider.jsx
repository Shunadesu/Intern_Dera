import React from 'react'
import slider from '../../image/slider.jpeg'
import slider2 from '../../image/image1.png';
import { Link, useLocation } from 'react-router-dom';
import path from '../../Ulities/path'
const Slider = () => {

  const location = useLocation();

  // Define a function to determine which image to render based on the pathname
  const getImageForPathname = () => {
    const { pathname } = location;
    if (pathname === path.NEWS) {
      return slider2; // Change to the appropriate image for the "/news" route
    }
    // Default image for other routes
    return slider; // Change to the default image you want to display
  };

  return (
    <div className='w-full h-[500px] flex gap-2 m-auto border-t-2 border-[#658C4A]'>
        <div className='flex-1 flex justify-center items-center '>
            <div className='flex flex-col gap-6 justify-center px-32'>
                <h1 className='text-[62px] font-bold font-heading_1'>Healthy cutlery, healthy body</h1>
                <h4 className='text-[20px] pr-32'>Upgrade your dining experience and begin your path to a healthy you right now</h4>
                <Link
                to={path.NEWS}
                className='bg-[#658C4A] 
                transition-all duration-500
                border border-white w-[200px] text-white p-4 rounded-full text-[20px] text-center font-semibold hover:bg-white hover:text-[#658C4A] hover:border hover:border-[#658C4A] cursor-pointer'>Learn More</Link>                
            </div>
        </div>

        <div className='flex-1'>
        <img src={getImageForPathname()} alt="slider" className='w-full h-full object-cover'/>        </div>
    </div>
  )
}

export default Slider