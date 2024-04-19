import React from 'react'
import logodera from '../image/logodera.png'

import SearchBar from './SearchBar'
import User from './User'
import Cart from './Cart'

import { Link } from 'react-router-dom'
import path from '../Ulities/path'

const HomeBar = ({selectedProduct, cartItems=[], setCartItems, totalPrice, setTotalPrice, quantity, setQuantity, handleQuantityChange, addToCart, id, increaseQuantity}) => {

  return (
    <div className='w-full flex bg-white px-16 py-8 justify-between items-center relative
    md-max-4:px-8
    '>
        
        <Link to={path.HOME}>
          <div className='w-[100px] h-[50px]
          '>
            <img src={logodera} alt="" className='w-full h-full object-cover
            md-max-3:object-contain
            md-max-3:w-[50px]
            '/>
          </div>
        </Link>
        <div className='block md-max-4:hidden'>
            <SearchBar/>
        </div>
        <div className='flex gap-6 md-max-3:gap-4 justify-center items-center'>
          <div className='hidden md-max-4:block'>
              <SearchBar/>
          </div>
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