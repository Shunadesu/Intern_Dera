import React from 'react'
import shopBanner from '../../image/banner.jpeg'
import Vector from '../../image/Vector (1).png'
const ShopBanner = () => {
  return (
    <div className="relative w-full h-[500px]">
        <img src={shopBanner} alt=""
        className='object-cover w-full h-full opacity-50' 
        />
         <div className="absolute inset-0 bg-[#658C4A] opacity-80"></div>
         <div className="absolute inset-0 flex flex-col gap-16 items-center justify-center font-heading_1 px-24">
            <h1 className="text-white text-[35px] font-bold text-center">
            Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental impact and promoting sustainable practices in every step of the shopping process
            </h1>
            <img src={Vector} alt="" />
        </div>
    </div>
  )
}

export default ShopBanner