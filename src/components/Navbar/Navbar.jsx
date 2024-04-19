import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import navdata from '../../Ulities/navdata'
import icons from '../../Ulities/icons'

const Navbar = () => {
    const {MdClose, GiHamburgerMenu} = icons
    const [showNav, setShowNav] = useState(false);
    return (
        <>
        {
            showNav ? 
            <div className='w-full h-[700px] z-[99] flex bg-white py-16 justify-start text-[18px]
            absolute flex-col right-0 top-0 border-2 border-l-[#658C4A] border-b-[#658C4A]
            '>
                {
                    navdata.map((nav)=>(
                        <Link to={nav.path} key={nav.id} 
                        onClick={()=>setShowNav(!showNav)}
                        className='w-full p-2 flex text-end'>
                            <p 
                            className='hover:bg-[#658C4A] hover:text-white w-full transition-all duration-500 hover:font-bold p-4'>
                                {nav.text}
                            </p>
                        </Link>
                    ))
                }
                <div 
                onClick={()=>setShowNav(!showNav)}
                className='absolute top-5 left-5 p-4 rounded-2xl border-white bg-white
                hover:bg-[#658C4A] hover:text-white
                transition-all duration-500
                '>
                
                <MdClose size={20}/>
                </div>
            </div>
            :
            <div>
                <div className='w-full flex bg-white px-16 justify-center items-center my-4 gap-6 text-[18px]
                md-max-2:hidden
                '>
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

            </div>
        }
        <div 
        onClick={()=>setShowNav(!showNav)}
        className='hidden
        md-max-2:flex md-max-2:items-center md-max-2:justify-end bg-white px-16
        md-max-4:px-8
        my-4 text-[18px] w-full
        '>
            <div className='p-4 bg-white rounded-2xl hover:bg-[#658c4a] hover:text-white transition-all duration-500'>
                <GiHamburgerMenu size={20}/>
            </div>
        </div>
        </>
    )
}

export default Navbar