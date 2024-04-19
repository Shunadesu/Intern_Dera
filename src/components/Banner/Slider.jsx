import React, { useState } from 'react'
import slider from '../../image/slider.jpeg'
import slider2 from '../../image/image1.png';
import { Link, useLocation } from 'react-router-dom';
import path from '../../Ulities/path'
const Slider = () => {

  const location = useLocation();
  const [border, setBorder] = useState('none')
  // Define a function to determine which image to render based on the pathname
  const getImageForPathname = () => {
    const { pathname } = location;
    if (pathname === path.NEWS || pathname === path.BATH) {
      return slider2; // Change to the appropriate image for the "/news" route
    }
    // Default image for other routes
    return slider; // Change to the default image you want to display
  };

  const { pathname } = location;
  return (
    <div className={`w-full h-[500px] flex gap-2 m-auto 
    md-max-3:flex-col md-max-3:gap-4 md-max-3:z-10
    
    ${pathname === path.NEWS 
      || pathname === path.CLOTHING 
      || pathname === path.BATH 
      || pathname === path.ACCESORIES
      || pathname === path.HOMEGOODS
      || pathname === path.FURNITURE
      || pathname === path.BEDDING
      ? 'border-t-0' : 'border-t-2 border-[#658C4A]'}
    `}>
      
        <div className='flex-1 flex justify-center items-center '>
            <div className='flex flex-col gap-6 justify-center 
            px-32
            md-max:gap-4
            md-max-2:px-16 
            md-max-3:py-6
            md-max-3:items-center
            md-max-4:px-8
            '>
                <h1 className='text-[62px] pr-8 font-bold font-heading_1
                md-max:text-[50px]
                md-max-2:text-[38px]
                md-max-3:text-[62px] md-max-3:pr-0 md-max-3:text-center md-max-3:py-4
                md-max-4:text-[48px]
                '>Healthy cutlery, <br/> healthy body</h1>
                <h4 className='text-[20px] pr-32 text-[#666666] font-normal
                md-max-2:pr-16
                md-max-3:text-[20px] md-max-3:text-center md-max-3:pr-0
                md-max-4:text-[18px]
                '>Upgrade your dining experience and begin your path to a healthy you right now</h4>
                <Link
                to={path.NEWS}
                className='bg-[#658C4A] 
                transition-all duration-500
                border border-white w-[200px] md-max-4:w-[170px] text-white p-4 rounded-full text-[20px] md-max-4:text-[18px] text-center font-semibold hover:bg-white hover:text-[#658C4A] hover:border hover:border-[#658C4A] cursor-pointer'>Learn More</Link>                
            </div>
        </div>

        <div className='flex-1
        md-max-3:absolute md-max-3:-z-10 md-max-3:h-[550px] w-full
        md-max-3:opacity-35
        '>
        <img src={getImageForPathname()} alt="slider" className='w-full h-full object-cover object-left-top'/>        
        </div>
    </div>
  )
}

export default Slider