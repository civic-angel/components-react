import React from 'react';
import './button.css';

export interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'danger';
  label: string;
  onClick?: () => void;
}

const Button = ({
  type = 'default',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['btn', `btn-${type}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
