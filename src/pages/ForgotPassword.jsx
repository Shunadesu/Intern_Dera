import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import icons from '../Ulities/icons';
import Swal from 'sweetalert2'
import banner from '../image/banner.png'


const ForgotPassword = () => {
    const navigate = useNavigate();
    const {MdArrowBack} = icons

    const [isShow, setIsShow] = useState(true)
    const Swal = require('sweetalert2')

    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        if (value && index < inputs.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
        }
    };


    // Resend Function
    const [remainingTime, setRemainingTime] = useState(180); // 180 seconds = 3 minutes

    useEffect(() => {
        const timer = setTimeout(() => {
        if (remainingTime > 0) {
            setRemainingTime((prevTime) => prevTime - 1);
        }
        }, 1000); // Update every second

        // Clear the timer when the component unmounts or when remainingTime reaches 0
        return () => clearTimeout(timer);
    }, [remainingTime]);

    
      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      };


  return (
    <div className='flex justify-center items-center px-4 h-[100vh] w-full'>
        <img src={banner} alt="" className='absolute top-0 bottom-0 w-full h-full'/>
        {
            isShow ?
            <div className='z-10 flex flex-col gap-4 justify-center w-[450px] h-[400px] bg-white rounded-lg p-6 border border-gray-400 relative'>
                <label htmlFor="forgot"
                className='text-[24px] text-[#658C4A]'
                >Forgot password</label>
                <div 
                onClick={()=> navigate("/login")}
                className='absolute top-5 right-5
                '><MdArrowBack size={24} className="transition-transform duration-500 hover:text-[#658C4A]"/>
                </div>
                <p className='text-[18px] text-[#666666]'>
                    Please enter the email you used to register and we will send you an activation code to change your password.
                </p>
                <form action=""
                className='flex flex-col gap-3 w-full'
                >
                    <label htmlFor="email" className='text-[18px] text-[#666666]'>Email</label>
                    <input 
                    id="email"
                    className='px-4 py-2 rounded-lg border border-gray-300' 
                    />
                </form>
                <button
                onClick={()=>{
                setIsShow(!isShow);
                }}
                className='bg-[#658C4A] px-4 py-2 rounded-lg text-white capitalize font-bold border border-[#658C4A]
                hover:bg-[#445e32]
                '>Send</button>
            </div>
            :
            <div className='z-10 flex flex-col gap-4 justify-center w-[450px] h-[400px] bg-white rounded-lg p-6 border border-gray-400 relative'>
                <div 
                onClick={()=> navigate("/login")}
                className='absolute top-5 right-5
                '><MdArrowBack size={24} className="transition-transform duration-500 hover:text-[#658C4A]"/>
                </div>
                 <div className="flex flex-col items-start justify-center h-screen gap-8 w-full">
                <h2 className="text-[24px] text-[#658C4A]">Password Password</h2>
                <p className="text-[18px] text-[#666666]">We have sent the code to your email, please fill it in below</p>
                <div className="flex gap-4 w-full justify-around">
                    {inputs.map((input, index) => (
                    <input
                        key={index}
                        type="text"
                        value={input}
                        maxLength={1}
                        className="w-12 h-12 text-2xl border border-gray-300 rounded-md text-center"
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        ref={(ref) => inputRefs.current[index] = ref} // Store the input ref in the inputRefs array
                    />
                    ))}
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    Resend the verification code after {formatTime(remainingTime)}
                </div>
                <button 
                onClick={()=>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Sunny Check',
                        confirmButtonText:'Close',
                        confirmButtonColor: '#658c4a'
                    })
                    setIsShow(!isShow);
                    navigate('/resetpassword')
                       
                }}
                className='bg-[#658C4A] w-full px-4 py-2 rounded-lg text-white capitalize font-bold border border-[#658C4A]
                hover:bg-[#445e32]
                '                
                >Submit</button>
                </div>
            </div>
        }
    </div>
  )
}

export default ForgotPassword