import React from 'react'
import logoFooter from '../image/badge.png'
import LinkFooter from './Footer/LinkFooter'
import icons from '../Ulities/icons'
import FooterIcon from './Footer/FooterIcon'

import sunnytest from '../image/footerbackground.jpeg' 

const Footer = () => {

  return (
    <div className='h-full relative'>
        <img src={sunnytest} alt="" className='absolute w-full h-full -z-10 object-cover opacity-30' />
        <div className='flex flex-col px-24 py-8 gap-8 items-center justify-center
        md-max-2:px-16
        md-max-4:px-8
        '>
            <div className='w-[120px] h-[120px]'>
                <img src={logoFooter} alt="logo" className='object-cover w-full h-full'/>
            </div>
            <LinkFooter />
        </div>
        <div className='w-full bg-[#658C4A] h-[2px]'></div>
        <div className='w-full flex flex-col gap-4 justify-center items-center p-8'>
            <FooterIcon/>
            <p className='text-center'>© 2023 Eco Shop Indonesia. All Rights Reserved by Sunny.</p>
        </div>
    </div>
  )
}

export default Footer