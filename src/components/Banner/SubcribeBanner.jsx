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
        <div className='w-full'>
            <img src={Media} alt="" className='w-full h-full object-contain'/>
        </div>
        <div className='h-[800px] md-max-2:h-[700px] md-max-3:h-[580px] md-max-4:h-[400px] relative flex '>
            <img src={banner} alt="" className='w-full h-full object-cover'/>
            <div className='absolute bottom-0 left-0 p-24 md-max-3:p-16 md-max-4:p-8'>
                <div className=' w-[650px] md-max-2:w-[500px] md-max-3:w-[450px] md-max-4:w-[400px] md-max-5:w-[300px] bg-white p-12
                md-max-2:p-8 
                md-max-4:p-4
                rounded-3xl flex flex-col gap-4 '>
                    <label htmlFor='email' className='font-heading_1 text-[24px]
                    hover:text-[#658C4A] cursor-pointer
                    '> Subscribe to our newsletter </label>
                    <p className='text-[#666666] text-[20px]
                    md-max-2:text-[18px]
                    md-max-3:text-[16px]
                    '>Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
                    <form
                    onSubmit={handleSubmit(onSubmitHandler)} 
                    class="w-full">
                        <div class="flex py-2 items-center">
                            <input class="text-[20px]
                            md-max-2:text-[18px]
                            md-max-3:text-[16px]
                            appearance-none bg-transparent border outline-1 outline-cyan-800 rounded-full w-full text-gray-700 py-4 px-8 focus:outline-none relative" 
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
                            bg-[#658C4A] hover:bg-white hover:border-[#658C4A] hover:text-[#658C4A] text-sm border text-white py-4 px-8 rounded-full absolute 
                            md-max-3:right-[6.5rem]
                            md-max-4:right-[3.2rem]
                            md-max-2:text-[18px]
                            md-max-3:text-[16px]
                            right-[9.5rem]" 
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