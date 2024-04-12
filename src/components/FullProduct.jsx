import React from 'react'
import FullPC from './Products/FullPC'
const FullProduct = () => {
  return (
    <div  className='px-16 py-32 flex flex-col gap-4'>
        <div className='flex flex-col justify-start'>
            <h1 id="pageTitle" className='font-heading_1 font-bold text-[48px]'>New Product</h1>
            <p className='text-[#666666]'>Be the first to have the first-class product</p>
        </div>
        <FullPC />
    </div>
  )
}

export default FullProduct