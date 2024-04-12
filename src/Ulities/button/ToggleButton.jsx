import React, { useState } from 'react';

const ToggleButton = ({ initialValue, onToggle }) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    onToggle(newValue); // Pass the new value to the parent component if needed
  };

  return (
    <button
      className={`px-4 py-2 rounded-full border ${isToggled ? 'bg-[#658C4A] text-white' : 'bg-[#f0f0f0] text-black'}`}
      onClick={toggle}
    >
      {isToggled ? 'On' : 'Off'}
    </button>
  );
};

export default ToggleButton;