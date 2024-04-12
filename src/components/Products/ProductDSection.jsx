import React,{useEffect} from 'react'

import DesProducts from './DesProducts'
import FixProduct from './FixProduct'
import Voting from './Voting'


const ProductDSection = ({selectedProduct, totalPrice, quantity, handleQuantityChange, addToCart}) => {
  
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }, []);

    return (
    <div className='bg-[#f0f0f0] w-full h-full'>
        <DesProducts 
        selectedProduct={selectedProduct}
        totalPrice={totalPrice}
        quantity={quantity} 
        handleQuantityChange={handleQuantityChange}
        addToCart={addToCart}
        />

        <FixProduct selectedProduct={selectedProduct}/>
        <Voting/>
    </div>
  )
}

export default ProductDSection