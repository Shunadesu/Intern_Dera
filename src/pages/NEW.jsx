import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import icons from '../Ulities/icons'
import productNew from '../Ulities/productNew'

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
  const {IoIosArrowRoundForward} = icons

  return (
    <div className='w-[1780px] flex flex-col m-auto'>
    <div className='w-full bg-[#658C4A] h-[60px] p-4 flex justify-center items-center text-white gap-2'>
      <p className='text-[16px]'>Free Shipping with minimum purchase Rp250.000</p>
      <IoIosArrowRoundForward size={30} className='font-bold'/>
    </div>
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
  )
}

export default NEW