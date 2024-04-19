import React, {useState} from 'react'

import productNew from '../../Ulities/productNew' 
import { Link } from 'react-router-dom';

const FullPC = () => {

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


        const itemsPerPage = 16; // Number of items to display per page
        const [currentPage, setCurrentPage] = useState(1);
      
        // Calculate the index range for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
      
        // Get the products to display for the current page
        const currentProducts = productNew.slice(startIndex, endIndex);
      
        // Handler for changing the current page
        const handlePageChange = (pageNumber) => {
          console.log("Changing to page:", pageNumber);
          setCurrentPage(pageNumber);
          window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
        };
      
        // Calculate the total number of pages
        const totalPages = Math.ceil(productNew.length / itemsPerPage);

  return (
    <div className=' py-16
    md-max-2:py-8
    md-max-4:py-4
    flex flex-col gap-4 justify-center'>
        <div className='grid grid-cols-4
        md-max-2:grid-cols-2 py-8
        md-max-3:grid-cols-3
        md-max-4:grid-cols-2 md-max-4:py-4

        '>
        {currentProducts.map((product) => (
          <Link to={`/news/${product.id}`} key={product.id} className='w-[300px]
          md-max-3:w-[220px]
          md-max-4:w-[180px]
          md-max-5:w-[150px]
          flex flex-col gap-3 justify-center'>
            <div className='w-[300px] h-[300px] 
            md-max-3:w-[220px] md-max-3:h-[220px]
            md-max-4:w-[180px] md-max-4:h-[180px]
            md-max-5:w-[150px] md-max-5:h-[150px]
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
        ))}
        </div>
        <div className="flex justify-center pt-16">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-6 py-4 rounded-full text-[18px] ${
              currentPage === index + 1 ? 'bg-[#658C4A] text-white' : 'bg-[#658C4A] text-white opacity-70 hover:opacity-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FullPC