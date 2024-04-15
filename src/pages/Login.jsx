import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom';
import icons from '../Ulities/icons';
import banner from '../image/banner.png'
const Login = () => {
  const navigate = useNavigate();
  const {MdClose} = icons
  return (
    <div className=''>
      <div className='flex justify-center items-center px-4 h-[100vh] w-full relative'>
        <img src={banner} alt="" className='absolute top-0 bottom-0 w-full h-full'/>
        <div className='flex px-4 gap-3 justify-center items-center relative'>
          <div 
              onClick={()=> navigate("/")}
              className='absolute top-3 right-7
              '><MdClose size={24} className="transition-transform duration-500 hover:text-[#658C4A]"/></div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login



