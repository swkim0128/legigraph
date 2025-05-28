// src/components/atoms/Button/Button.tsx
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}

/** Primary UI component for user interaction */
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    disabled = false,
}) => {
    const baseStyles = 'px-4 py-2 rounded text-white font-semibold';
    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700',
        secondary: 'bg-gray-500 hover:bg-gray-600',
        danger: 'bg-red-600 hover:bg-red-700',
    };

    return (
        <button
            type="button"
            className={clsx(
                baseStyles,
                variantStyles[variant],
                disabled && 'opacity-50 cursor-not-allowed'
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
