import React from 'react';

export interface RadioProps {
    id?: string;
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
    id,
    name,
    label,
    value,
    checked,
    onChange,
    disabled = false,
}) => {
    return (
        <label className="inline-flex items-center space-x-2">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-sm text-gray-800">{label}</span>
        </label>
    );
};

export default Radio;
