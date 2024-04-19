import React from 'react'
import { Link } from 'react-router-dom'
import path from '../../Ulities/path'

import clothing from '../../image/image1.png'
import bedding from '../../image/image2_bedding.png'
import accesories from '../../image/image3_accessories.png'
import furniture from '../../image/imag3_furniture.png'
import HomeGoods from '../../image/image5_homegidohi.png'

const NavBanner = ({controls}) => {
  return (
    <div 
    className='w-full flex bg-white px-16
    md-max-4:px-8
    items-center my-32 gap-4 justify-center text-white font-semibold md-max-2:flex-col'>
        <Link to={path.CLOTHING}>
            <div className='w-[424x] h-[500px] relative hover:opacity-90
            md-max:w-[400px] md-max:h-[424px] 
            md-max-2:w-[1000px] md-max-2:h-[200px]
            md-max-3:w-[730px] md-max-3:h-[200px]
            md-max-4:w-[450px]
            md-max-5:w-[380px]
            '>
                <img src={clothing} alt="" className='w-full h-full object-cover rounded-lg'/>
                <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Clothing </div>
            </div>
        </Link>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 w-[700px] justify-between
            md-max:w-[550px] 
            md-max-2:w-[1000px]
            md-max-3:w-[730px] md-max-3:h-full md-max-3:flex-col
            md-max-4:w-[450px]
            md-max-5:w-[380px]
            '>
                <Link to={path.BEDDING}>
                    <div className=' w-[430px] h-[240px] relative hover:opacity-90
                    md-max:w-[312px] md-max:h-[208px]
                    md-max-2:w-[690px]
                    md-max-3:w-[730px]
                    md-max-4:w-[450px]
                    md-max-5:w-[380px]
                    '>
                        <img src={bedding} alt="" className='w-full h-full object-cover rounded-lg'/>
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Bedding </div>
                    </div> 
                </Link> 
                <Link to={path.ACCESORIES}>
                    <div className=' w-[250px] h-[240px] relative hover:opacity-90
                    md-max:w-[220px] md-max:h-[208px] 
                    md-max-2:w-[300px]
                    md-max-3:w-[730px]
                    md-max-4:w-[450px]
                    md-max-5:w-[380px]
                    '>
                        <img src={accesories} alt="" className='w-full h-full object-cover rounded-lg'/> 
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Accesories </div>
                    </div> 
                    
                </Link>
            </div>
            <Link to={path.FURNITURE}>
                    <div className='w-[700px] h-[240px] relative hover:opacity-90
                    md-max:w-[550px] md-max:h-[200px] 
                    md-max-2:w-[1000px]
                    md-max-3:w-[730px]
                    md-max-4:w-[450px]
                    md-max-5:w-[380px]
                    '>
                        <img src={furniture} alt="" className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Furniture </div>
                    </div> 
            </Link>
        </div>
        <Link to={path.HOMEGOODS}>
            <div className='w-[400px] h-[500px] relative hover:opacity-90
            md-max:w-[312px] md-max:h-[424px] 
            md-max-2:w-[1000px]
            md-max-3:w-[730px] md-max-3:h-[200px]
            md-max-4:w-[450px]
            md-max-5:w-[380px]
            '>
                   <img src={HomeGoods} alt="" className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Home Goods </div>
                    </div> 
        </Link>
    </div>
  )
}

export default NavBanner 