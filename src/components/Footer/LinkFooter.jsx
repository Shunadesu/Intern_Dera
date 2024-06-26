import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import data 
import EcoData from '../../Ulities/data/EcoData'
import navdata from '../../Ulities/navdata'
import SupportData from '../../Ulities/data/SupportData'

//import bank image
import bank from '../../image/Payment Logo.png'
import bank_1 from '../../image/Payment Logo (1).png'
import bank_2 from '../../image/Payment Logo (2).png'

import path from '../../Ulities/path'

const LinkFooter = () => {

    const [isShow, setIsShow] = useState(false);

  return (
    <div className='py-12 w-full flex justify-between
    md-max-2:grid md-max-2:grid-cols-2 md-max-2:gap-4
    '>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#658C4A] md-max-3:text-[24px] md-max-3:my-1 md-max-3:font-bold text-[20px] my-3 font-semibold'>Eco Shop</h1>
            
            {
                EcoData.map((data)=>(
                    <Link key={data.id} to={data.path} className='font-semibold hover:text-[#658C4A] transition-all duration-500'>
                        {data.text}
                    </Link>
                ))
            }

            
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#658C4A] text-[20px] md-max-3:text-[24px] md-max-3:my-1 md-max-3:font-bold my-3 font-semibold' >Product Categories</h1>
            {
                isShow ? 
                <div className='flex flex-col gap-2'>
                    {
                        navdata.map((data)=>(
                            <Link key={data.id} to={path.FAIL} className='font-semibold hover:text-[#658C4A] transition-all duration-500'>
                                {data.text}
                            </Link>
                        ))
                    }
                </div>
                :
                <div className='flex flex-col gap-2 md-max-3:hidden'>
                    {
                        navdata.map((data)=>(
                            <Link key={data.id} to={path.FAIL} className='font-semibold hover:text-[#658C4A] transition-all duration-500'>
                                {data.text}
                            </Link>
                        ))
                    }
                </div>
            }
                
                <div 
                onClick={()=>setIsShow(!isShow)}
                className='hidden md-max-3:flex font-bold border-1 text-center w-full rounded-2xl cursor-pointer hover:text-[#658c4a]'>
                    {
                        isShow ? 'Hide' : 'See More'
                    }
                </div>
            
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#658C4A] text-[20px] md-max-3:text-[24px] md-max-3:my-1 md-max-3:font-bold my-3 font-semibold ' >Support</h1>
            {
                SupportData.map((data)=>(
                    <Link key={data.id} to={path.FAIL} className='font-semibold hover:text-[#658C4A] transition-all duration-500'>
                        {data.text}
                    </Link>
                ))
            }
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#658C4A] md-max-3:text-[24px] md-max-3:my-1 md-max-3:font-bold text-[20px] my-3 font-semibold' >Payment</h1>
            <div className='flex flex-col gap-4'>
                <img src={bank} alt="" />
                <img src={bank_1} alt="" />
                <img src={bank_2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LinkFooter