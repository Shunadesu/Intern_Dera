import React from 'react'
import AccountPayment from './Payment/AccountPayment'
import ProductPayment from './Payment/ProductPayment'

const PaymentD = ({cartItems=[], setCartItems, totalPrice, setTotalPrice, quantity, setQuantity, handleQuantityChange, addToCart, id, increaseQuantity}) => {
  return (
    <div className='bg-[#f0f0f0] w-full h-full'>
        <div className='flex gap-8 items-center justify-between px-16 py-16
        md-max-2:px-8 md-max-2:py-8
        md-max-3:flex-col
        '>
            <AccountPayment/>
            <ProductPayment
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

export default PaymentD