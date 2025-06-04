// components/atoms/Badge.tsx
import React from 'react';
import clsx from 'clsx';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const baseStyles = 'inline-block rounded-full font-medium text-white';

const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
};

const variantStyles = {
    default: 'bg-gray-500',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-red-600',
    info: 'bg-blue-600',
};

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    className,
}) => {
    const combinedClassName = clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
    );

    return <span className={combinedClassName}>{children}</span>;
};

export default Badge;
