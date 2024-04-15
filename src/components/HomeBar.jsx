import React from 'react'
import logodera from '../image/logodera.png'

import SearchBar from './SearchBar'
import User from './User'
import Cart from './Cart'

import { Link } from 'react-router-dom'
import path from '../Ulities/path'

const HomeBar = ({selectedProduct, cartItems=[], setCartItems, totalPrice, setTotalPrice, quantity, setQuantity, handleQuantityChange, addToCart, id, increaseQuantity}) => {

  return (
    <div className='w-full flex bg-white px-16 justify-between items-center mt-8 relative'>
        
        <Link to={path.HOME}>
          <img src={logodera} alt="" className='w-[100px] h-[50px] object-cover'/>
        </Link>
        <SearchBar />
        <div className='flex gap-6'>
            <User />
            <Cart
              selectedProduct={selectedProduct}
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              quantity={quantity}
              setQuantity={setQuantity}  
              handleQuantityChange={handleQuantityChange}
              addToCart={addToCart}
            />
        </div>
    </div>
  )
}

export default HomeBar