import React, { useState } from 'react';

const QuantityInput = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDecrease = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 border border-black w-[200px] justify-center rounded-full">
      <button onClick={handleDecrease} className="text-bold py-2 text-[28px]">
        -
      </button>
      <input
        className="w-[50px] text-[22px] bg-[#f0f0f0] text-center p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 appearance-none"
        type="number"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleIncrease} className="text-bold py-2 text-[28px]">
        +
      </button>
    </div>
  );
};

export default QuantityInput;