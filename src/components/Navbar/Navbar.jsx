import React from 'react'
import { Link } from 'react-router-dom'

import navdata from '../../Ulities/navdata'

const Navbar = () => {
  return (
    <div className='w-full flex bg-white px-16 justify-center items-center my-4 gap-6 text-[18px]'>
        {
            navdata.map((nav)=>(
                <Link to={nav.path} key={nav.id}>
                    <p className='hover:bg-[#658C4A] hover:text-white p-4 rounded-2xl transition-all duration-500 hover:font-bold'>
                        {nav.text}
                    </p>
                </Link>
            ))
        }
    </div>
  )
}

export default Navbar