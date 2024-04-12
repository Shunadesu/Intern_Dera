import React from 'react'
import Products from '../Products/Products'


const WProducts = () => {
  return (
    <div className='w-full bg-[#FFEFE5] px-16 py-32 flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='font-heading_1 font-semibold text-[52px] text-[#333333] text-center'>
                Our Most Wanted Products
            </h1>
            <p className='text-[20px] text-[#666666]'>Good for environment, good for you</p>
        </div>
        <Products />
    </div>
  )
}

export default WProducts