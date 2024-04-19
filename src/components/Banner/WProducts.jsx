import React from 'react'
import Products from '../Products/Products'
import { motion } from 'framer-motion'

const WProducts = ({controls}) => {
  return (
    <motion.div 
    className='w-full bg-[#FFEFE5] px-16
    md-max-4:px-8
    py-32
    md-max-4:py-16
    flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='font-heading_1 font-semibold text-[52px] text-[#333333] text-center
            md-max-2:text-[42px]
            md-max-3:text-[30px]
            md-max-5:text-[24px]
            '>
                Our Most Wanted Products
            </h1>
            <p className='text-[20px]
            md-max-2:text-[18px]
            md-max-3:text-[16px]
            text-[#666666]'>Good for environment, good for you</p>
        </div>
        <Products />
    </motion.div>
  )
}

export default WProducts