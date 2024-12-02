import React from 'react';
import './Button.css';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  onClick,
  isDisabled = false,
  children
}) => {
  let buttonClass = `button ${size} ${variant}`;

  if (isDisabled) {
    buttonClass += ' disabled';
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={isDisabled}
   >
    {children}
   </button>
  );
};
