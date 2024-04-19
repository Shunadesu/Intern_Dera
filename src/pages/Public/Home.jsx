import React, {useState, useEffect} from 'react'
import icons from '../../Ulities/icons'
import productNew from '../../Ulities/productNew'
import { useParams } from 'react-router-dom';
import popup from '../../image/popup.png'
import { Link } from 'react-router-dom';
import { HomeBar, NavBanner, Navbar, Slider,WProducts,NewArrival,ShopBanner, WhyBanner, SubcribeBanner, Footer,Popup } from '../../components'
import path from '../../Ulities/path';

import { motion } from "framer-motion"

const Home = () => {

  const {IoIosArrowRoundForward, MdClose, FaTicketAlt, IoChatbubblesOutline} = icons
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
      <p className='text-[16px]
      md-max-4:text-[14px]
      '>Free Shipping with minimum purchase Rp250.000</p>
      <IoIosArrowRoundForward size={30} className='font-bold'/>
    </div>
    <div className='w-full max-w-[2000px] flex flex-col m-auto relative'>
      <>
      {showPopup && 
      <div className='w-full'>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-[2000]"></div>
        <motion.div 
        className="fixed inset-0 flex items-center justify-center z-[3000]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
          <div className='flex w-[800px] 
          md-max-2:w-[600px]
          md-max-3:w-[480px]
          md-max-4:w-[380px]
          md-max-5:w-[380px]
          
          relative bg-white rounded-2xl shadow-lg'>
            <div className='w-[500px] h-[500px]
            md-max-2:w-[380px] md-max-2:h-[330px]
            md-max-3:w-[330px] md-max-3:h-[280px]
            md-max-4:w-[350px] md-max-4:h-[250px]
             '>
            <img src={popup} alt="" className='w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl'/>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center text-center px-8 md-max-4:px-4'>
              <h1 className='font-heading_1 text-[20px]
              md-max-4:text-[18px]
              font-bold'> Get 15% off </h1>
              <p className='text-[#666666] md-max-4:text-[16px] md-max-5:text-[14px]'>On your initial purchase of our chosen products</p>
              <Link to={path.NEWS}>
                  <div className='text-[#658C4A] text-[18px]
                  md-max-4:text-[16px]
                  cursor-pointer font-semibold rounded-full px-4 py-2 border border-[#E7CEC0] bg-[#E7CEC0]
                  hover:bg-[#658C4a] hover:text-[#E7CEC0]
                  transition-all duration-500
                  '>Show Now</div>
              </Link>
            </div>
            <div
            className='absolute top-5 md-max-4:top-3 right-5 md-max-4:right-3 cursor-pointer rounded-full p-2 bg-white
            hover:bg-[#658C4A] hover:text-white
            transition-all duration-500
            '
            onClick={() =>  setShowPopup(!showPopup)}>
              <MdClose size={22}/>
            </div>
          </div>
        </motion.div>
      </div>
      } 
      </>
      <div className='fixed bottom-10 right-10 z-[1000]'>
        <div className='flex flex-col gap-4'>
          <div 
          className='p-4 md-max-4:p-2 bg-[#658C4A] rounded-tl-2xl border rounded-tr-2xl rounded-br-2xl text-white
          hover:bg-white hover:text-[#658C4A] hover:border-[#658C4A]
          transition-all duration-500
          '
          onClick={() =>  setShowPopup(!showPopup)}>
            <FaTicketAlt size={20}/>
          </div>

          <div 
          className='p-4 md-max-4:p-2 bg-[#658C4A] rounded-tl-2xl border rounded-tr-2xl rounded-bl-2xl text-white
          hover:bg-white hover:text-[#658C4A] hover:border-[#658C4A]
          transition-all duration-500
          '
          onClick={() =>  setShowPopup(!showPopup)}>
            <IoChatbubblesOutline size={20}/>
          </div>
        </div>
      </div>

      <HomeBar 
          id={id}
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
      <Slider />
      <NavBanner/>
      <WProducts/>
      <NewArrival/>
      <ShopBanner />
      <WhyBanner/>
      <SubcribeBanner/>
      <Footer />
    </div>
    </>
  )
}

export default Home