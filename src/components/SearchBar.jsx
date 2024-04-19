import React, { useState } from 'react'
import icons from '../Ulities/icons'
const SearchBar = () => {
const {HiMagnifyingGlass} = icons

const [isShow, setIsShow] = useState(true);

  return (
    <div    
    className={`flex gap-4 items-center w-[880px] h-[50px] rounded-full border border-gray-300 px-4
    md-max:w-[500px]
    md-max-3:w-[300px]
    ${isShow ? 'md-max-4:w-[50px]' : 'md-max-4:w-[200px]'}
    transition-all duration-500
    md-max-4:hover:text-[#658c4a] md-max-4:cursor-pointer
    `}>
        <HiMagnifyingGlass size={24} onClick={() =>setIsShow(!isShow)}/>
        <input type="text" placeholder='Search here..' className={`text-[16px] text-[#666666] w-full border-none p-2 rounded-full
        
        ${isShow ? 'md-max-4:hidden' : ''}
        `}/>
    </div>
  )
}

export default SearchBar