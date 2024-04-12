import React from 'react'
import { useNavigate } from 'react-router-dom';
import icons from '../Ulities/icons';
import Swal from 'sweetalert2'


const ForgotPassword = () => {
    const navigate = useNavigate();
    const {MdArrowBack} = icons
    const Swal = require('sweetalert2')
  return (
    <div className='flex justify-center items-center px-4 h-[100vh] w-full max-w-[1880px] '>
        <div className='flex flex-col gap-4 justify-center w-[450px] h-[400px] bg-white rounded-lg p-6 border border-gray-400 relative'>
            <label htmlFor="forgot"
            className='text-[24px] text-[#658C4A]'
            >Forgot password</label>
            <div 
            onClick={()=> navigate("/login")}
            className='absolute top-5 right-5
            '><MdArrowBack size={24} className="transition-transform duration-500 hover:text-[#658C4A]"/></div>
            <p className='text-[18px] text-[#666666]'>
                Please enter the email you used to register and we will send you an activation code to change your password.
            </p>
            <label htmlFor="email" className='text-[18px] text-[#666666]'>Email</label>
            <input 
            id="name"
            className='px-4 py-2 rounded-lg border border-gray-300' 
            />
            <button
            onClick={()=>{
                Swal.fire({
                    title: 'Sunnyyyyyy!!',
                    text: 'Congratulations',
                    icon: 'success',
                    confirmButtonText: 'Back',
                    confirmButtonColor: '#658C4A',
                    customClass: {
                        confirmButton: 'swal-button-full-width', // Add custom class for confirm button    
                    }
                  })
            }}
            className='bg-[#658C4A] px-4 py-2 rounded-lg text-white capitalize font-bold border border-[#658C4A]
            hover:bg-[#445e32]
            '>Send</button>
        </div>
    </div>
  )
}

export default ForgotPassword