import React, {useState} from 'react'
import icons from '../../Ulities/icons';
import Swal from 'sweetalert2';
import ToggleButton from '../../Ulities/button/ToggleButton';

const ProductPayment = ({cartItems=[], setCartItems, totalPrice, setTotalPrice, quantity}) => 
{
  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    updatedCartItems[index].totalPrice += updatedCartItems[index].price;
    setCartItems(updatedCartItems);
    updateTotalPrice(updatedCartItems);
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const [usePoints, setUsePoints] = useState(false);
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
  const {FiTrash, FiPlus, FiMinus, MdSunny} = icons
  const sunnycheckAdress = localStorage.getItem('adress');
  const checkAdress = () => {
    sunnycheckAdress ?
    Swal.fire(
    {
      icon: 'success',
      title: 'Successfull',
      confirmButtonText:`It will sent to ${sunnycheckAdress}`,
      confirmButtonColor: '#685c'
    })
    :
    Swal.fire({
      icon: 'error',
      title: 'Fail',
      confirmButtonText:`Fill the Adress Information first`,
      confirmButtonColor: '#685c'
    })
  }

  const handleTogglePoints = (newValue) => {
    setUsePoints(newValue);
    // Do something with the new value if needed
  };
  const totalPriceSum = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div className='flex-1 w-full flex gap-8 flex-col'>
      <div className='p-8 bg-white rounded-2xl flex flex-col gap-4'>
        <div className='font-heading_1 text-[28px] font-bold'>
          Product
        </div>
        {
          cartItems.map((item, index) => (
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
            <div
            onClick={()=>checkAdress()}
            className='
            transition-all duration-500
            hover:text-[#685c] hover:bg-white hover:border-[#685c]
            flex w-full bg-[#685c] px-2 py-4 text-white rounded-3xl justify-center uppercase border border-white'>
              
              Pay
              
            </div>
            :
            <div className='flex justify-center items-center gap-2'>
              Nothing in this Cart, Sunny
              <MdSunny  
              color='yellow'
              size={18}/>
            </div>
          }
      </div>
      <div  className='p-8 bg-white rounded-2xl flex flex-col gap-4'>
        <div className='flex justify-center flex-col gap-4'>
          <label htmlFor='pcode' className='font-heading_1 text-[28px] font-bold'>
            Promotional Code 
          </label>
          <select
            id='pcode'
            className='px-4 py-2 rounded-lg border border-gray-300'
          >
            <option value=''>Promotional Code</option>
            <option value='district1'>Code 1</option>
            <option value='district2'>Code 2</option>
            <option value='district3'>Code 3</option>
          </select>
        </div>
      </div>
      <div  className='p-8 bg-white rounded-2xl flex flex-col gap-4'>
      <div className='flex justify-center flex-col gap-2'>
          <div className='font-heading_1 text-[28px] font-bold'>
            Oder Details
          </div>
          <div className='flex justify-between items-center py-4 border-b-2 border-black my-2'>
          <p>Oder Value</p>
          {
            cartItems.map((data)=>(
              <div className='font-bold'>{totalPriceSum}</div>
            ))
          }
          </div>
          <div className='font-heading_1 text-[20px] font-bold'>
            After using the discount code
          </div>
          <div className='flex justify-between items-center py-4 border-b-2 border-black'>
            <p>Order value </p>
            <p className='font-bold'>{totalPriceSum*2/3}</p>
          </div>
          <div className='font-heading_1 text-[20px] font-bold'>
            Shipping costs
          </div>
          <div className='flex justify-between items-center py-4 border-b-2 border-black'>
          <p>Shipping fee</p>
          <p className='font-bold'>{totalPriceSum*1/200}</p>
          </div>
          <div className='font-heading_1 text-[20px] font-bold'>
            Use existing points
          </div>
          <div className='flex justify-between items-center '>
            <p>Current Points</p>
            <p className='font-bold'>100</p>
          </div>
          <div className='flex justify-between items-center py-4 border-b-2 border-black'>
            <p>Use point</p>
            <p className='font-bold'><ToggleButton initialValue={usePoints} onToggle={handleTogglePoints} /></p>
          </div>
          <div className='flex justify-between items-center py-4'>
            <p className='font-bold'>Total Payment Code</p>
            <p className='font-bold'>{totalPriceSum + totalPriceSum*1/200  - (usePoints ? 100 : 0) }</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default ProductPayment