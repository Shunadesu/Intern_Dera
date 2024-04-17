import React, { useState } from 'react'
import icons from '../../Ulities/icons';
import SubmitVoting from '../Voting/SubmitVoting';
import Cmting from '../Voting/Cmting';


const Voting = () => {
    const {FaStar} = icons

    const [isShow, setIsShow] = useState(true)
  return (
    <div className='px-24 my-16 flex flex-col gap-4
    md-max:px-20
    md-max-2:px-16 md-max-2:my-8

    '>
        <h1 className='text-[#333333] text-[28px] md-max-2:text-[24px] font-bold'>Voting</h1>
        <div className='px-8 flex items-center w-full justify-between '>
            <div className='flex flex-col gap-2 items-center '>
                <p className='text-[28px] font-bold text-[#685c]'>4.9/5</p>
                <div className='flex gap-2 items-center'>
                    {[...Array(5)].map((star, i) => {
                        return (
                        <FaStar
                            key={i}
                            color={"#658C4A"}
                            size={28}
                        />
                        );
                    })}
                </div>
                <p className='px-2'>( 20 reviews )</p>
            </div>
            <div className=''>
                {
                    isShow ? 
                    <div className={`flex gap-8 justify-center items-center flex-row-reverse `}>
                        {[...Array(5)].map((sunny, i) => {
                            return (
                                <div className='flex gap-2 justify-center items-center 
                                px-4 py-2 border border-[#658C4A] rounded-xl cursor-pointer
                                hover:bg-[#658C4A] hover:text-white transition-all duration-500
                                '>
                                    Review {i+1} <FaStar 
                                                    key={i}
                                                    color={"#E7CEC0"}
                                                    size={16}
                                                />
                                </div>
                            );
                        })}
                        <div className='px-4 py-2 border border-[#658C4A] rounded-xl
                        hover:bg-[#658C4A] hover:text-white cursor-pointer
                        transition-all duration-500
                        '> All </div>
                    </div>
                    :
                    <div></div>
                }
                <div 
                onClick={()=>{
                    setIsShow(!isShow)}
                }
                className='flex'>
                    Sunny
                </div>
            </div>
        </div>
        <SubmitVoting />
        <Cmting/>
    </div>
  )
}

export default Voting