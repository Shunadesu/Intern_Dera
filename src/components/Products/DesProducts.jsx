import React, {useRef} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icons from '../../Ulities/icons';
import QuantityInput from '../../Ulities/input/QuantityInput';

import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import path from '../../Ulities/path';

const DesProducts = ({selectedProduct, totalPrice, quantity, handleQuantityChange, addToCart}) => {
    const sliderRef = useRef(null);  

    const sunnycheck = localStorage.getItem('username');

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previousSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
      
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const { name, price, img } = selectedProduct;
    const {MdNavigateBefore, FaStar, FaRegHandPointRight, MdNavigateNext} = icons

    // format the price into Rp .000
    const formatPrice = (price) => {
        // Convert price to string
        const priceString = price.toString();
        
        // Split the price into integer and decimal parts
        const [integerPart, decimalPart] = priceString.split('.');
        
        // Pad the decimal part with zeroes to ensure three decimal places
        const paddedDecimalPart = decimalPart ? decimalPart.padEnd(3, '0') : '000';
        
        // Format integer part with 'Rp' prefix and thousand separators
        const formattedIntegerPart = 'Rp' + parseInt(integerPart).toLocaleString();
        
        // Combine formatted integer part with padded decimal part
        const formattedPrice = formattedIntegerPart + '.' + paddedDecimalPart;
        
        return formattedPrice;
    };

    return (
        <div className='flex justify-between items-start p-32'>
            <div className='flex flex-col flex-1 gap-4 p-4 w-[600px] justify-center items-center'>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[600px] h-[600px]'>
                        <img src={img} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-12'>
                    <div onClick={()=>previousSlide()} className='
                    transition-all duration-500
                    hover:text-white hover:bg-[#658C4A] hover:border-white 
                    px-2 py-[4rem] w-full h-full bg-white rounded-xl border border-gray-300 cursor-pointer'>
                        <MdNavigateBefore size={24}/>
                    </div>
                    <div className='w-[500px]'>
                        <Slider ref={sliderRef} {...settings}>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[200px] px-2' >
                                <img src={img} alt="" className='w-full h-full object-contain' />
                            </div>
                            
                        </Slider>
                    </div>
                    <div onClick={()=>nextSlide()} className='
                    transition-all duration-500
                    hover:text-white hover:bg-[#658C4A] hover:border-white 
                    px-2 py-[4rem] w-full h-full bg-white rounded-xl border border-gray-300 cursor-pointer' >
                        <MdNavigateNext size={24}/>
                    </div>
                </div>
                </div>
            <div className='flex flex-col gap-4 flex-1'>
                <div className='uppercase font-bold text-[32px] text-[#333333] '>
                    {name}
                </div>
                <div className='text-[#333333]'>
                    Status: In stock
                </div>
                <p className=''>
                where sustainability meets comfort in a sleek and modern design. Crafted with a commitment to environmental responsibility, this lounge chair is made from recycled plastic materials, contributing to reducing waste while providing exceptional durability.
                </p>
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
                    <p className='px-2'>( 20 reviews )</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className='text-[32px] font-bold text-[#658C4A]'>
                            {formatPrice(price)}
                        </div>
                        <div  className='text-[18px] text-[#191919]'>
                            Save: {formatPrice(price*(1-0.5))}
                        </div>
                    </div>
                    <div className='text-[18px] text-[#191919]'>
                        <del>
                            {formatPrice(price*(1+0.5))}
                        </del>                    
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='uppercase text-[#333333] font-bold text-[18px]'>
                        incentives 
                    </h1>
                    <div className='px-6 flex gap-4 items-center'>
                        <FaRegHandPointRight size={24}/>
                        <p className='text-[#333333]'>50% off first bill</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='uppercase text-[#333333] font-bold text-[18px]'>
                        quantity
                    </h1>
                    <QuantityInput initialValue={quantity} onChange={handleQuantityChange} />
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <button 
                    
                    className='py-4 px-8 bg-[#658C4A] rounded-2xl font-semibold text-white uppercase'
                    onClick={() => 
                        sunnycheck ?
                        Swal.fire({
                            icon: 'success',
                            title: `${sunnycheck} bought ${quantity} ${selectedProduct.name}(s) for ${totalPrice}`,
                            confirmButtonText: 'Close',
                            confirmButtonColor: '#658C4A'
                        })
                        :
                        Swal.fire({
                            icon: 'error',
                            title: `Login First`,
                            confirmButtonText: `You must login first`,
                            confirmButtonColor: '#658C4A'
                        })
                   }>
                        Buy 
                    </button>
                    <button 
                    className='py-4 px-8 bg-[#333333] rounded-2xl font-semibold text-white uppercase'
                    onClick={()=>{
                        addToCart();
                        Swal.fire({
                            icon: 'success',
                            title: 'Added to the Cart',
                            confirmButtonText: 'Close',
                            confirmButtonColor: '#658C4A'
                        })
                    }}>
                        Drop Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesProducts