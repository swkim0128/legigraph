// components/atoms/Spinner.tsx
import React from 'react';
import clsx from 'clsx';

export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
    return (
        <div
            className={clsx(
                'border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin',
                sizeMap[size],
                className
            )}
        />
    );
};

export default Spinner;
