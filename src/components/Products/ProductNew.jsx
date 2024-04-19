import React from 'react'
import productNew from '../../Ulities/productNew'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from 'react-router-dom';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200, // Medium screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1000, // Small screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 900, // Small screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 700, // Small screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
    // You can add more breakpoints as needed
  ]
};

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


const ProductNew = ({ sliderRef }) => {
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {
           productNew.map((product) => (
            <Link to={`/news/${product.id}`} key={product.id} className='
            w-[300px] flex flex-col gap-4
            md-max-3:w-[180px]
            md-max-4:w-[150px]
            '>
              <div className='w-[300px] h-[300px] 
              md-max-3:w-[180px] md-max-3:h-[180px]
              md-max-4:w-[150px] md-max-4:h-[150px]
              '>
                  <img src={product.img} alt={product.name} className='w-full h-full object-cover rounded-md' />
              </div>
              <h3 className='text-[20px]
              md-max-2:text-[18px]
              md-max-3:text-[16px]
              font-semibold'>{product.name}</h3>
              <div className='text-[16px] font-medium'>
                  <p className='text-[#658C4A]'>{formatPrice(product.price)}</p>
              </div>
          </Link>
          ))
        }
      </Slider>
    </div>
  )
}

export default ProductNew