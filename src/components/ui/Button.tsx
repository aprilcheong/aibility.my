import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}
export const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:from-yellow-500 hover:to-orange-600 focus:ring-orange-500',
    secondary: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 focus:ring-blue-500'
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>;
};