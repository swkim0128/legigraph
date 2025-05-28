// src/components/atoms/Button/Button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    /** Is this the principal call to action on the page? */
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    /** Optional click handler */
    onClick?: () => void;
};

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    variant = 'primary',
    disabled = false,
    onClick,
}) => {
    const baseClass =
        'px-4 py-2 rounded font-semibold transition-colors duration-200';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };
    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                baseClass,
                variants[variant],
                disabled && 'opacity-50 cursor-not-allowed'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
