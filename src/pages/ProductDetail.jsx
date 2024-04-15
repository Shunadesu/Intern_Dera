import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productNew from '../Ulities/productNew';
import icons from '../Ulities/icons';
import Breadcrumbs from '../Ulities/Breakcrumbs';
import { Footer, HomeBar, Navbar, NewArrival, ProductDSection } from '../components';

const ProductDetail = () => {
    const { id } = useParams();
    const selectedProduct = productNew.find(product => product.id === parseInt(id));
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, []);

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

    if (!selectedProduct) {
        return <div>Product not found!</div>;
    }

    const { IoIosArrowRoundForward } = icons;

    return (
      <>
        <div className='w-full bg-[#658C4A] h-[60px] p-4 flex justify-center items-center text-white gap-2'>
            <p className='text-[16px]'>Free Shipping with minimum purchase Rp250.000</p>
            <IoIosArrowRoundForward size={30} className='font-bold' />
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
            <ProductDSection
                selectedProduct={selectedProduct}
                totalPrice={totalPrice}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                addToCart={addToCart}
            />
            <NewArrival/>
            <Footer/>
        </div>
      </>
    );
}

export default ProductDetail;