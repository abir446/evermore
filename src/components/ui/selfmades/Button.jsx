import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button className={`cursor-pointer rounded-lg ${className}`}>
      {text}
    </button>
  );
};

export default Button;
