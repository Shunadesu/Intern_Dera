import React from 'react'
import FullPC from './Products/FullPC'
const FullProduct = () => {
  return (
    <div  className='px-16
    md-max-4:px-8
    py-16
    flex flex-col gap-4'>
        <div className='flex flex-col justify-start mt-8'>
            <h1 id="pageTitle" className='font-heading_1 font-bold text-[48px]
            md-max-2:text-[40px]
            md-max-3:text-[32px]
            md-max-4:text-[24px]
            '>New Product</h1>
            <p className='text-[#666666]
            md-max-4:text-[14px]
            '>Be the first to have the first-class product</p>
        </div>
        <FullPC />
    </div>
  )
}

export default FullProduct