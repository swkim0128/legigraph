import React from 'react';

export interface InputProps {
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ id, value, onChange, placeholder }) => {
    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="px-3 py-2 border border-gray-300 rounded w-full"
        />
    );
};

export default Input;
