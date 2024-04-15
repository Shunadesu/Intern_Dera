import React from 'react';

const Popup = ({ handleClosePopup }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-10">
      <h2 className="text-xl font-bold mb-4">Welcome to Our Website!</h2>
      <p className="text-base">We offer a wide range of products for your needs.</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none" onClick={handleClosePopup}>Close</button>
    </div>
  );
};

export default Popup;