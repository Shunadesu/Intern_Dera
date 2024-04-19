import React from 'react'
import icons from '../../Ulities/icons'

const FooterIcon = () => {
    const {
        FaWhatsapp,
        FaTiktok,
        FaInstagram,
        FaFacebook} = icons
  return (
    <div className='w-full flex gap-4 justify-center items-center text-white'>
        <div className='p-4 md-max-4:p-2 bg-[#333333] rounded-full' >
            <FaWhatsapp size={25}/>
        </div>
        <div className='p-4 md-max-4:p-2 bg-[#333333] rounded-full' >
            <FaTiktok size={25}/>
        </div>
        <div className='p-4 md-max-4:p-2 bg-[#333333] rounded-full' >
            <FaInstagram size={25}/>
        </div>
        <div className='p-4 md-max-4:p-2 bg-[#333333] rounded-full' >
            <FaFacebook size={25}/>
        </div>
    </div>
  )
}

export default FooterIcon