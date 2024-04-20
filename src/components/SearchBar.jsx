import React, { useState } from 'react'
import icons from '../Ulities/icons'
const SearchBar = () => {
const {HiMagnifyingGlass} = icons

const [isShow, setIsShow] = useState(true);

  return (
    <div    
    className={`flex gap-4 items-center w-[880px] h-[50px] rounded-full border border-gray-300 px-4
    transition-all duration-500
    md-max:w-[500px]
    md-max-3:w-[300px]
    ${isShow ? 'md-max-4:w-[50px]' : 'md-max-4:w-[200px]'}
    md-max-4:hover:text-[#658c4a] md-max-4:cursor-pointer

    hover:border-[#658c4a]
    focus:border-[#658c4a]
    `}>
        <HiMagnifyingGlass size={24} onClick={() =>setIsShow(!isShow)}/>
        <input type="text" placeholder='Search here..' className={`text-[16px] text-[#666666] w-full px-4 py-2 rounded-full focus:outline-none
        
        ${isShow ? 'md-max-4:hidden' : ''}
        `}/>
    </div>
  )
}

export default SearchBar