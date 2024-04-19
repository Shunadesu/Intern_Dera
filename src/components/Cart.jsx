import React, {useState} from 'react'
import icons from '../Ulities/icons'


import CartBar from './Cart/CartBar'

const Cart = ({selectedProduct, cartItems, setCartItems, setTotalPrice }) => {
const {CiShoppingCart} = icons
const [isCartVisible, setIsCartVisible] = useState(false);
const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
};


const increaseQuantity = (index) => {
  const updatedCartItems = [...cartItems];
  updatedCartItems[index].quantity++;
  updatedCartItems[index].totalPrice += updatedCartItems[index].price;
  setCartItems(updatedCartItems);
  updateTotalPrice(updatedCartItems);

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};

const decreaseQuantity = (index) => {
  const updatedCartItems = [...cartItems];
  if (updatedCartItems[index].quantity > 1) {
    updatedCartItems[index].quantity--;
    updatedCartItems[index].totalPrice -= updatedCartItems[index].price;
  } else {
    // Remove the item from the cart if the quantity becomes 0
    updatedCartItems.splice(index, 1);
  }
  setCartItems(updatedCartItems);
  updateTotalPrice(updatedCartItems);

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};


const updateTotalPrice = (updatedCartItems) => {
  const newTotalPrice = updatedCartItems.reduce((total, item) => total + item.totalPrice, 0);
  setTotalPrice(newTotalPrice);

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};

const removeFromCart = (index) => {
  const updatedCartItems = [...cartItems];
  updatedCartItems.splice(index, 1); // Remove the item at the specified index
  setCartItems(updatedCartItems);
  updateTotalPrice(updatedCartItems); // Update the total price after removing the item

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};

  return (
    <div >
       
            {/* Other component content */}
            <button 
            className='w-full md-max-3:text-[30px] md-max-4:text-[24px] text-[40px] flex justify-center items-center'
            onClick={toggleCartVisibility}>
                <CiShoppingCart/>
            </button>
            {isCartVisible &&  <CartBar selectedProduct={selectedProduct} isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} toggleCartVisibility={toggleCartVisibility} cartItems={cartItems} setCartItems={setCartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />}
        
    </div>
  )
}

export default Cart