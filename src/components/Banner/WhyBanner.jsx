import React from 'react'
import Rectangle from '../../image/Rectangle 548.png'
import WhyData from '../../Ulities/data/WhyData'
const WhyBanner = () => {
  return (
    <div className='w-full px-16 py-32 flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center relative'>
            <h1 className='font-heading_1 font-semibold text-[52px]
            md-max-2:text-[40px]
            md-max-3:text-[30px]
            text-[#658C4A] text-center'>
                Why Bought From Us?
            </h1>
            <img src={Rectangle} alt="" className='absolute -z-10 -top-5 -left-16' />
        </div>
        <div className='flex gap-12 w-full justify-around px-8 my-16
        md-max-2:grid md-max-2:grid-cols-2
        md-max-3:justify-center
        '>
            {
                WhyData.map((data)=>(
                    <div key={data.id} className='flex flex-col gap-3 w-[300px] md-max-2:w-[250px] md-max-3:w-[180px] md-max-3:items-center md-max-3:text-center'>
                        <div className='w-[50px] h-[50px] my-4'>
                            <img src={data.img} alt={data.name} className='w-full h-full object-contain' />
                        </div>
                        <h3 className='font-bold text-[20px] md-max-2:text-[18px] md-max-3:text-[16px]'>{data.name}</h3>
                        <p className='text-[20px] md-max-2:text-[18px] md-max-3:text-[16px]'>{data.sub}</p>
                    </div> 
                ))
            } 
        </div>
    </div>
  )
}

export default WhyBanner