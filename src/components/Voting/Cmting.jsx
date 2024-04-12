import React from 'react'
import VotingData from '../../Ulities/data/VotingData'
import icons from '../../Ulities/icons'
const Cmting = () => {
const {FaStar, BiLike} = icons

  return (
    <div className='flex flex-col gap-8'>
        {
            VotingData.map((data) =>
            (
                <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-xl'>
                    <div className='flex gap-2'>
                        <p className='font-bold'>{data.name}</p>
                        <div className='flex gap-2 items-center'>
                            {[...Array(5)].map((star, i) => {
                                return (
                                <FaStar
                                    key={i}
                                    color={"#658C4A"}
                                    size={16}
                                />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <p className='text-[#191919]'>{data.comment}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='flex items-center justify-center gap-6'>
                            <div className='flex items-center justify-center gap-4'>
                                <BiLike size={20} color='#658C4A'/>
                                <p>Helpful</p>
                            </div>
                            <i>Date posted: {data.day}</i>
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Cmting