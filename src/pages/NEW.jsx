import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import icons from '../Ulities/icons'
import productNew from '../Ulities/productNew'
import { Link } from 'react-router-dom'
import path from '../Ulities/path'
import popup from '../image/popup.png'
import { HomeBar, Navbar, Slider,FullProduct, Footer } from '../components'
import Breadcrumbs from '../Ulities/Breakcrumbs'

const NEW = () => {

  const { id } = useParams();
  const selectedProduct = productNew.find(product => product.id === parseInt(id));
  const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(selectedProduct ? selectedProduct.price : 0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
      setTotalPrice(selectedProduct ? selectedProduct.price * newQuantity : 0);
  };

  const addToCart = () => {
    const newItem = {
      name: selectedProduct.name,
      quantity: quantity,
      price: selectedProduct.price,
      totalPrice: selectedProduct.price * quantity
    };
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
  };
   useEffect(() => {
  // Retrieve cart items from local storage
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
  }
}, [setCartItems]);

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }, []);
  const {IoIosArrowRoundForward, MdClose} = icons
  const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the popup

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 15000); // 1 minute in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <div className='w-full bg-[#658C4A] h-[60px] p-4 flex justify-center items-center text-white gap-2'>
      <p className='text-[16px]'>Free Shipping with minimum purchase Rp250.000</p>
      <IoIosArrowRoundForward size={30} className='font-bold'/>
    </div>
    <>
      {showPopup && 
      <div>
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-10"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
          <div className='flex w-[800px] relative bg-white rounded-2xl shadow-lg'>
            <div className='w-[500px] h-[500px]'>
            <img src={popup} alt="" className='w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl'/>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center text-center px-8'>
              <h1 className='font-heading_1 text-[20px] font-bold'> Get 15% off </h1>
              <p className='text-[#666666]'>On your initial purchase of our chosen products</p>
              <Link to={path.NEWS}>
                  <div className='text-[#685c] text-[18px]'>Show Now</div>
              </Link>
            </div>
            <div
            className='absolute top-5 right-5 cursor-pointer rounded-full p-2 bg-white
            hover:bg-[#685c] hover:text-white
            transition-all duration-500
            '
            onClick={() =>  setShowPopup(!showPopup)}>
              <MdClose size={22}/>
            </div>
          </div>
        </div>
      </div>
      } 
      </>
      <div className='fixed bottom-10 right-10'>
        <div className='flex flex-col gap-8'>
          <div 
          className='p-4 bg-[#685c] rounded-tl-xl '
          onClick={() =>  setShowPopup(!showPopup)}>
            Sunny
          </div>
        </div>
      </div>
    <div className='w-[1440px] flex flex-col m-auto'>
    <HomeBar 
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
    <Navbar />
    <Breadcrumbs />
    <Slider />
    <FullProduct />
    <Footer />
    </div>
    </>
  )
}

export default NEW