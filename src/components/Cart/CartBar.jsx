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
    const {FiTrash, FiPlus, FiMinus, MdClose, MdSunny} = icons
  return (
    <div>
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-[200]"></div>
      <div className='z-[999] absolute top-0 right-0 h-[200vh] w-1/2 md-max-2:w-[600px] md-max-3:w-[500px] md-max-4:w-[350px] bg-white px-12 border-2 border-l-[#658c4a] border-b-[#658c4a]'>
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
        className='
        w-full gap-12
        my-6
        grid grid-cols-3
        items-center md-max-3:my-6 md-max-3:flex md-max-3:flex-col'
        key={index}> 
          <div className=''>
            <p className='font-bold'>{item.name}</p>
            <div className='flex gap-4'>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {formatPrice(item.price)}</p>
            </div>
          </div>
          <div className='flex gap-2 md-max-3:gap-4 md-max-3:my-4'>

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

          </div>
          <p className='md-max-3:font-bold text-center'>{formatPrice(item.totalPrice)}</p>
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