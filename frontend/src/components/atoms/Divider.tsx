// components/atoms/Divider.tsx
import React from 'react';
import clsx from 'clsx';

export interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    className,
}) => {
    return (
        <div
            className={clsx(
                orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px',
                'bg-gray-300',
                className
            )}
        />
    );
};

export default Divider;
