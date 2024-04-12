import React from 'react'
import Rectangle from '../../image/Rectangle 548.png'
import WhyData from '../../Ulities/data/WhyData'
const WhyBanner = () => {
  return (
    <div className='w-full px-16 py-32 flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center relative'>
            <h1 className='font-heading_1 font-semibold text-[52px] text-[#658C4A] text-center'>
                Why Bought From Us?
            </h1>
            <img src={Rectangle} alt="" className='absolute -z-10 -top-5 -left-16' />
        </div>
        <div className='flex gap-12 w-full justify-around px-8 my-16'>
            {
                WhyData.map((data)=>(
                    <div key={data.id} className='flex flex-col gap-3 w-[300px]'>
                        <div className='w-[50px] h-[50px] my-4'>
                            <img src={data.img} alt={data.name} className='w-full h-full object-cover' />
                        </div>
                        <h3 className='font-bold text-[20px]'>{data.name}</h3>
                        <p className='text-[20px]'>{data.sub}</p>
                    </div> 
                ))
            } 
        </div>
    </div>
  )
}

export default WhyBanner