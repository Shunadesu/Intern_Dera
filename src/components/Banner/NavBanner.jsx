import React from 'react'
import { Link } from 'react-router-dom'
import path from '../../Ulities/path'

import clothing from '../../image/image1.png'
import bedding from '../../image/image2_bedding.png'
import accesories from '../../image/image3_accessories.png'
import furniture from '../../image/imag3_furniture.png'
import HomeGoods from '../../image/image5_homegidohi.png'

const NavBanner = () => {
  return (
    <div className='w-full flex bg-white px-16 items-center my-32 gap-4 justify-center text-white font-semibold'>
        <Link to={path.CLOTHING}>
            <div className='w-[550px] h-[550px] relative hover:opacity-90'>
                <img src={clothing} alt="" className='w-full h-full object-cover rounded-lg'/>
                <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Clothing </div>
            </div>
        </Link>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2 w-[700px] justify-between'>
                <Link to={path.BEDDING}>
                    <div className='w-[430px] h-[250px] relative hover:opacity-90'>
                        <img src={bedding} alt="" className='w-full h-full object-cover rounded-lg'/>
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Bedding </div>
                    </div> 
                </Link> 
                <Link to={path.ACCESORIES}>
                    <div className='w-[250px] h-[250px] relative hover:opacity-90'>
                        <img src={accesories} alt="" className='w-full h-full object-cover rounded-lg'/> 
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Accesories </div>
                    </div> 
                    
                </Link>
            </div>
            <Link to={path.FURNITURE}>

                    <div className='w-[700px] h-[285px] relative hover:opacity-90'>
                        <img src={furniture} alt="" className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Furniture </div>
                    </div> 
        </Link>
        </div>
        <Link to={path.HOMEGOODS}>
            <div className='w-[405px] h-[550px] relative hover:opacity-90'>
                   <img src={HomeGoods} alt="" className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute bg-[#333333] bottom-4 left-4 px-4 py-2 rounded-full'> Home Goods </div>
                    </div> 
        </Link>
    </div>
  )
}

export default NavBanner 