import React from 'react';
import clsx from 'clsx';

export interface InputProps {
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    value,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(
                className,
                'px-3 py-2 border border-gray-300 rounded w-full'
            )}
        />
    );
};

export default Input;
