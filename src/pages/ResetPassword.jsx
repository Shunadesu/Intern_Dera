import React,{useState} from 'react'
import icons from '../Ulities/icons'
import banner from '../image/banner.png'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


// See password function
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const schema = yup.object().shape({
    password: yup.string().min(1).max(32).required(),
    confirmPassword: 
      yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
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
    reset();
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {MdArrowBack} = icons
    const Swal = require('sweetalert2')
  return (
    <div className='flex justify-center items-center px-4 h-[100vh] w-full'>
        <img src={banner} alt="" className='absolute top-0 bottom-0 w-full h-full'/>
    <div className='z-10 flex flex-col gap-4 justify-center w-[450px] h-[500px] bg-white rounded-lg p-6 border border-gray-400 relative'>
    <div 
    onClick={()=>navigate('/login')}
    className='absolute top-5 right-5
    '><MdArrowBack size={24} className="transition-transform duration-500 hover:text-[#658C4A]"/>
    </div>
     <div className="flex flex-col items-start justify-center h-screen gap-8 w-full">
    <h2 className="text-[24px] text-[#658C4A]">Reset Password</h2>
    <p className="text-[18px] text-[#666666]">Congratulations, you have successfully confirmed, please enter a new password</p>
    
    <form 
    onSubmit={handleSubmit(onSubmitHandler)}
    className='flex flex-col gap-3 w-full'
    >

        <div className='flex justify-center flex-col gap-2'>
          <label htmlFor="password" className='font-bold text-[#666666]'>Password</label>
          <div className='relative'>
              <input
                id="password"
                className='px-4 py-2 rounded-lg border border-gray-300 w-full'
                type={showPassword ? 'text' : 'password'}  name="password" autoComplete="off" placeholder='************' 
                {...register("password", { required: true, maxLength: 30 })}
              />
              <button 
                type="button" 
                className='absolute top-[12px] right-3'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
          </div>
              <p className='capitalize text-red-600'>{errors.password?.message}</p>
          </div>


          <div className='flex justify-center flex-col gap-2'>
              <label htmlFor="email" className='font-bold text-[#666666]'>Confirm Password</label>
              
              <div className='relative'> 
                <input
                  id="confirmPassword"
                  className='px-4 py-2 rounded-lg border border-gray-300 w-full'
                  type={showPassword ? 'text' : 'password'}  name="confirmPassword"  autoComplete="off" placeholder='************' 
                  {...register("confirmPassword", { required: true, maxLength: 30 })}
                />
                <button 
                  type="button" 
                  className='absolute top-[12px] right-3'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <p className='capitalize text-red-600'>{errors.confirmPassword?.message}</p>
            </div>

    </form>
    <button 
    onClick={()=>{
        navigate('/');
    }}
    type='submit'
    className='bg-[#658C4A] w-full px-4 py-2 rounded-lg text-white capitalize font-bold border border-[#658C4A]
    hover:bg-[#445e32]
    '                
    >Submit</button>
    </div>
</div>
</div>
  )
}

export default ResetPassword