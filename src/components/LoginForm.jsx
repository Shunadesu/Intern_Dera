import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import googleLogo from '../image/google.png'



const LoginForm = () => {
  const navigate = useNavigate();
  const [regis, isRegis] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(true);

  const schema = yup.object().shape({
    name: yup.string().min(1).max(32),
    email: yup.string().email().required(),
    password: yup.string().min(1).max(32).required(),
    phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    confirmPassword: regis ?
      yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
      : yup.string()
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
    setIsSubmitSuccess(true); // Set submit success to true
    console.log(isSubmitSuccess)
    localStorage.setItem('username', data.email);
    reset();
    if (isSubmitSuccess) {
      console.log(data)
      navigate('/'); // Navigate to home page after successful form submission
    }
  };


  return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-col border-2 p-4 w-[400px]">
        <p className='text-[28px] text-[#658C4A] line mb-4 font-semibold'>
            {
              regis ? "Register" : "Login"
            }
        </p>
        <form 
        className='flex flex-col gap-3 w-full'
        onSubmit={handleSubmit(onSubmitHandler)}>
          {
            regis ? (
            <div className='flex justify-center flex-col gap-2'>
            <label htmlFor="name" className='font-bold text-[#666666]'>Username</label>
            <input
              id="name"
              className='px-4 py-2 rounded-lg border border-gray-300'
              type="text" name="name" autoComplete="off"
              {...register("name", { required: true, maxLength: 30 })}
            />
            <p className='capitalize text-red-600' >{errors.name?.message}</p>
            </div>) : ""
          }
          {
            regis ? (
            <div className='flex justify-center flex-col gap-2'>
            <label htmlFor="email" className='font-bold text-[#666666]'>Phone</label>
              <input
                id="phone"
                className='px-4 py-2 rounded-lg border border-gray-300'
                type="number" name="phone"  autoComplete="off" 
                {...register("phone", { required: true, maxLength: 30 })}
              />
                <p className='capitalize text-red-600'>{errors.phone?.message}</p>
            </div>) : ""
          }
          <div className='flex justify-center flex-col gap-2'>
            <label htmlFor="email" className='font-bold text-[#666666]'>Email</label>
            <input
              id="email"
              className='px-4 py-2 rounded-lg border border-gray-300'
              type="text" name="email" autoComplete="off"
              {...register("email", { required: true, maxLength: 30 })}
            />
            <p className='capitalize text-red-600' >{errors.email?.message}</p>
          </div>
          <div className='flex justify-center flex-col gap-2'>
          <label htmlFor="password" className='font-bold text-[#666666]'>Password</label>
            <input
              id="password"
              className='px-4 py-2 rounded-lg border border-gray-300'
              type="password" name="password" autoComplete="off" placeholder='************' 
              {...register("password", { required: true, maxLength: 30 })}
            />
              <p className='capitalize text-red-600'>{errors.password?.message}</p>
          </div>
          {regis ? (
            <div className='flex justify-center flex-col gap-2'>
              <label htmlFor="email" className='font-bold text-[#666666]'>Confirm Password</label>
              <input
                id="confirmPassword"
                className='px-4 py-2 rounded-lg border border-gray-300'
                type="password" name="confirmPassword"  autoComplete="off" placeholder='************' 
                {...register("confirmPassword", { required: true, maxLength: 30 })}
              />
              <p className='capitalize text-red-600'>{errors.confirmPassword?.message}</p>
            </div>
          ):""
          }

          <button 
          className='bg-[#658C4A] px-4 py-2 rounded-lg text-white hover:bg-[#456131] font-bold'
          type="submit">{regis ? "Register" : "Sign In"}
          </button>

          <div 
          className='cursor-pointer text-[#666666] hover:text-[#456131]'
          onClick={() => navigate('/forgotpassword')}>
            Forgot Password ?
          </div>
          
          <div className='flex justify-center items-center  mt-2 gap-6'>
            <div className='w-full h-[1px] bg-black'></div>
            Or
            <div className='w-full h-[1px] bg-black'></div>
          </div>

          <div className='flex gap-2 justify-center items-center mt-2 '>
             <img src={googleLogo} alt="" className='object-cover w-[30px]'/>
             <p className='text-blue-800 hover:text-blue-950 cursor-pointer'>Log in with Google</p> 
          </div>
        </form>
      </div>
      <div className="flex flex-col border-2 p-4 w-[400px]">
        <div className='flex gap-2 justify-center items-center'>
          <p className='text-[16px] text-center'>
            {
              regis ? "Don't have any account? " : " You have an account? "
            }
          </p>
          <div 
          className='text-[16px] text-blue-400 hover:text-blue-800 cursor-pointer'
          onClick={() => isRegis(!regis)}
          >
            {
              regis ? "Login" : "Sign Up"
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginForm



