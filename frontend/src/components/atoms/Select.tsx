import React from 'react';

export interface SelectOption {
    key: string;
    value: string;
    label: string;
}

export interface SelectProps {
    id?: string;
    options: SelectOption[];
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    id,
    options,
    name,
    value,
    onChange,
    disabled = false,
}) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="px-3 py-2 border border-gray-300 rounded w-full bg-white"
        >
            {options.map((opt) => (
                <option key={opt.key} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
