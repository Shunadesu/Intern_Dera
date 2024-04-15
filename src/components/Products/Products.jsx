import React from 'react'
import productData from '../../Ulities/productdata'
const Products = () => {

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
    <div className='flex gap-4 w-full justify-between px-8'>
        {
           productData.map((product) => (
            <div key={product.id} className='w-[400px] flex flex-col gap-3'>
                <div className='w-[280px] h-[280px] '>
                    <img src={product.img} alt={product.name} className='w-full h-full object-cover rounded-md' />  
                </div>
              <h3 className='text-[20px] font-semibold'>{product.name}</h3>
              <div className='text-[16px] font-medium'>
                <p className='text-[#658C4A]'>{formatPrice(product.price)}</p>
                <p className='text-[#999999]'><del>{formatPrice(product.price_discount)}</del></p>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Products