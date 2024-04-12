import React from 'react'
import Media from '../../image/Section Media.png'
import banner from '../../image/banner.png'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import Swal from 'sweetalert2'

const SubcribeBanner = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
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
        localStorage.setItem('email', data.email);
        Swal.fire({
            title: `Email sent! ${data.email}`,
            text: 'Successfullyy!!',
            icon: 'success',
            confirmButtonText: 'Sunny_pnhn cam on rat nhieu a' ,
            confirmButtonColor: '#658C4A',
        })
        reset();
      };

      const Swal = require('sweetalert2')
  return (
    <div>      
        <div>
            <img src={Media} alt="" className='w-full object-cover'/>
        </div>
        <div className='h-[800px] relative flex '>
            <img src={banner} alt="" className='w-full h-full object-cover'/>
            <div className='absolute bottom-0 left-0 p-24'>
                <div className=' w-[650px] bg-white p-10 rounded-3xl flex flex-col gap-4 '>
                    <label htmlFor='email' className='font-heading_1 text-[24px]
                    hover:text-[#658C4A] cursor-pointer
                    '> Subscribe to our newsletter </label>
                    <p className='text-[#666666] text-[20px]'>Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
                    <form
                    onSubmit={handleSubmit(onSubmitHandler)} 
                    class="w-full">
                        <div class="flex py-2 items-center">
                            <input class="text-[20px] appearance-none bg-transparent border outline-1 outline-cyan-800 rounded-full w-full text-gray-700 py-4 px-8 focus:outline-none relative" 
                            type="email" placeholder="Your Email" id='email'
                            {...register("email", { required: true, maxLength: 30 })}
                            />
                            <button 
                            onClick={()=>{
                                if (errors.email) {
                                    Swal.fire({
                                      title: 'Error',
                                      text: errors.email.message,
                                      icon: 'error',
                                      confirmButtonText: 'Close',
                                      confirmButtonColor: '#658C4A',
                                    });
                                } 
                            }}
                            class="flex-shrink-0
                            font-bold text-[20px]
                            transition-all duration-500
                            bg-[#658C4A] hover:bg-white hover:border-[#658C4A] hover:text-[#658C4A] text-sm border text-white py-4 px-8 rounded-full absolute right-[9rem]" 
                            type="submit">
                            Subscribe
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
            {/* 50% layout */}
            <div className=''></div>
        </div>
    </div>
  )
}

export default SubcribeBanner