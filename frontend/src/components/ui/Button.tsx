import React, { forwardRef } from 'react';
import './Button.css';

// Define the props for the button, mirroring the original component's variants.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'default',
    size = 'default',
    ...props
  }, ref) => {

    // Combine a base class with variant and size classes
    const buttonClasses = [
      'button',
      `button--${variant}`,
      `button--${size}`,
      className // Allow for additional classes to be passed in
    ].filter(Boolean).join(' ');

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
