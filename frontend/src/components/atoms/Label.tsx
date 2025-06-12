import React from 'react';
import clsx from 'clsx';

export interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
    className?: string;
}

const Label = ({
    htmlFor,
    children,
    required = false,
    className,
}: LabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={clsx(
                'block text-sm font-medium text-gray-700',
                className
            )}
        >
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    );
};

export default Label;
