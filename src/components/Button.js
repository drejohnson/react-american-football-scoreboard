import React from 'react';
import '../App.css';

const Button = ({ handleEvent, className, children }) => {
  return (
    <button onClick={handleEvent} className={className}>
      {children}
    </button>
  );
};

export default Button;
