import React, {useState} from 'react'
import icons from '../../Ulities/icons'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import Swal from 'sweetalert2'
import { motion } from "framer-motion"
const SubmitVoting = () => {

    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        // If the star is already selected, deselect it
        if (value === rating) {
            setRating(0);
        } else {
            // Otherwise, set the rating to the clicked star's value
            setRating(value);
        }
    };


const schema = yup.object().shape({
    name: yup.string().min(1).max(32),
    comment: yup.string()
});

const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    {
      mode: 'onChange',
      resolver: yupResolver(schema)
    }
  )


  const onSubmitHandler = (data) => {
    console.log({ data });
    localStorage.setItem('comment', data.name);
    localStorage.setItem('review', data.comment);
    Swal.fire(
    {
        icon: 'success',
        title: `Thanks for the comment, ${data.name}`,
        confirmButtonText: 'Please reload to check your Comment',
        confirmButtonColor: '#658C4A',
    })
    reset();
  };


const [show, isShow] = useState(false)
const {FaStar, MdClose} = icons
  return (
    <div className='border-y-2 py-2 border-gray-300 
    flex justify-start items-start flex-col'>
        <div 
        onClick={()=>isShow(!show)}
        className='
        hover:bg-white hover:text-[#658C4A] hover:border-[#658C4A]
        px-6 py-4 bg-[#658C4A] font-semibold text-white w-[300px] text-center rounded-2xl border border-white cursor-pointer'>
            Please submit your review
        </div>
        
        {
            show ?
            <motion.div 
            
            className='w-full'>
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-[2000]"></div>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='
                fixed
                z-[2001] top-0 bottom-0 right-0 left-0
                flex justify-center items-center'>
                    <div className='p-6 my-6 bg-white rounded-2xl flex flex-col items-start gap-6 justify-center'>
                        <p className='text-[20px] leading-4 text-center font-bold font-heading_1'>Review Product</p>
                        <div className='flex gap-4 items-center'>
                            <div>Your review</div>
                            <div className='flex gap-2 items-center'>
                            {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <FaStar
                            key={index}
                            color={ratingValue <= rating ? '#658C4A' : '#ccc'} // Change color based on whether the star is selected or not
                            size={28}
                            onClick={() => handleStarClick(ratingValue)} // Handle click event
                            style={{ cursor: 'pointer' }} // Show pointer cursor when hovering over stars
                        />
                    );
                })}
                        </div>
                        </div>
                        <form className='flex flex-col gap-4 relative'
                        onSubmit={handleSubmit(onSubmitHandler)}
                        >
                        <div 
                        onClick={()=> isShow(!show)}
                        className='absolute top-[-6.5rem] right-0 cursor-pointer
                        p-2 rounded-2xl hover:bg-[#658c4a] hover:text-white transition-all duration-500
                        '>

                            <MdClose size={24}/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="name" className='font-bold text-[#666666]'>Username</label>
                            <input
                            id="name"
                            className='px-4 py-2 rounded-lg border border-gray-300 
                            w-[600px]
                            md-max-2:w-[500px]
                            md-max-4:w-[300px]
                            md-max-5:w-[250px]
                            '
                            type="text" name="name" autoComplete="off"
                            {...register("name", { required: true, maxLength: 30 })}
                            />
                            <p className='capitalize text-red-600' >{errors.name?.message}</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <label htmlFor="comment" className='font-bold text-[#666666]'>Your review for product</label>
                            <textarea
                            id="comment"
                            className='px-4 py-2 rounded-lg border border-gray-300 w-[600px] h-[200px]
                            md-max-2:w-[500px]
                            md-max-4:w-[300px] md-max-4:h-[150px]
                            md-max-5:w-[250px] md-max-5:h-[120px]
                            '
                            type="text" name="comment" autoComplete="off"
                            {...register("comment", { required: true, maxLength: 30 })}
                            />
                            <p className='capitalize text-red-600' >{errors.comment?.message}</p>
                        </div>
                        <button
                            onClick={()=>isShow(!show)} 
                            className='bg-[#658C4A] px-4 py-2 rounded-lg text-white hover:bg-[#456131] font-bold'
                            type="submit">
                                Submit
                            </button>
                        </form>
                    </div> 
                </motion.div>

            </motion.div> 
            :   
            <></>
        }
    </div>
  )
}

export default SubmitVoting