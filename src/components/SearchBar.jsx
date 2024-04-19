import React from 'react'
import icons from '../Ulities/icons'
const SearchBar = () => {
const {HiMagnifyingGlass} = icons
  return (
    <div className='flex gap-4 items-center w-[880px] h-[50px] rounded-full border border-gray-300 px-4
    md-max:w-[500px]
    md-max-3:w-[300px]
    md-max-4:w-[200px]
    md-max-5:w-[150px]
    '>
        <HiMagnifyingGlass size={24}/>
        <input type="text" placeholder='Search here..' className='text-[16px] text-[#666666] w-full border-none p-2 rounded-full '/>
    </div>
  )
}

export default SearchBar