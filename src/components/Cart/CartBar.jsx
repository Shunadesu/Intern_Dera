import React,{useEffect} from 'react'
import icons from '../../Ulities/icons';
import path from '../../Ulities/path'
import { Link}  from 'react-router-dom'

const CartBar = ({ cartItems =[], setCartItems, increaseQuantity, decreaseQuantity, removeFromCart, isCartVisible, setIsCartVisible, selectedProduct, toggleCartVisibility }) => {

    console.log(cartItems)

    const sunnycheck = localStorage.getItem('username');

    useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
    }
    }, [setCartItems]); 

    const {FiTrash, FiPlus, FiMinus, MdClose, MdSunny} = icons
  return (
    <div>
    
      <div className='absolute top-0 right-0 h-[100vh] w-[700px] bg-white px-12'>
        <div className='flex justify-between items-center my-4 py-4 border-b-2 border-[#685c]'>
          <h2 className='font-bold text-[24px]'>Shopping Bag</h2>
          <div
          className='
          cursor-pointer
          px-4 py-2 border-[#685c] border rounded-full text-[20px] text-[#685c]
          hover:border-white hover:text-white hover:bg-[#685c]'
          onClick={toggleCartVisibility}
          ><MdClose size={18}/></div>
        </div>
        {cartItems.map((item, index) => (
        <div 
        className='flex justify-between items-center my-6'
        key={index}> 
          <div>
            <p className='font-bold'>{item.name}</p>
            <div className='flex gap-4'>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
            <button
            className='px-4 py-2 border-[#685c] border rounded-full text-[20px] text-[#685c]
            hover:border-white hover:text-white hover:bg-[#685c]
            '
            onClick={() => increaseQuantity(index)}><FiPlus size={18} /></button>
            <button
            className='px-4 py-2 border-[#685c] border rounded-full text-[20px] text-[#685c]
            hover:border-white hover:text-white hover:bg-[#685c]'
            onClick={() => decreaseQuantity(index)}><FiMinus size={18} /></button>
            <button 
            className='px-4 py-2 border-[#685c] border rounded-full text-[20px] text-[#685c]
            hover:border-white hover:text-white hover:bg-[#685c]'
            onClick={() => removeFromCart(index)}><FiTrash size={18} /></button> {/* Button to remove the item */}
            <p>{item.totalPrice}</p>
        </div>
        ))}
        {
          cartItems.length ? 
          <Link to={ sunnycheck ?  path.PAYMENT : path.LOGIN }
          className='
          transition-all duration-500
          hover:text-[#685c] hover:bg-white hover:border-[#685c]
          flex w-full bg-[#685c] px-2 py-4 text-white rounded-3xl justify-center uppercase border border-white'>Checking Out</Link>
          :
          <div className='flex justify-center items-center gap-2'>
            Nothing in this Cart, Sunny
            <MdSunny  
            color='yellow'
            size={18}/>
          </div>
        }
      </div>
      
    </div>
  )
}

export default CartBar