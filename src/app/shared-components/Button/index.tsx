import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
};

const variants = {
  primary: 'bg-red-600 hover:bg-red-700 text-white',
  secondary: 'bg-white border border-gray-700 hover:bg-gray-400 text-black hover:border-transparent',
  danger: 'bg-red-700 hover:bg-red-800 text-white',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-6 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
