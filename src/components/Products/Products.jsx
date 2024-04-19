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
    <div className='flex gap-4 w-full justify-between
        md-max-3:grid md-max-3:grid-cols-2

    '>
        {
           productData.map((product) => (
            <div key={product.id} className='
            w-[380px]
                md-max:w-[280px]
                md-max-4:w-[220px]
                md-max-5:w-[150px]
                flex flex-col gap-3'>
                <div className='w-[380px] h-[380px] 
                md-max:w-[280px] md-max:h-[280px]
                md-max-2:w-[200px] md-max-2:h-[200px]
                md-max-3:w-[300px] md-max-3:h-[300px]
                md-max-4:w-[220px] md-max-4:h-[220px]
                md-max-5:w-[150px] md-max-5:h-[150px]
                '>
                    <img src={product.img} alt={product.name} className='w-full h-full object-cover rounded-md' />  
                </div>
              <h3 className='text-[20px] font-semibold
              md-max-2:text-[18px]
              md-max-3:text-[16px]
              '>{product.name}</h3>
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