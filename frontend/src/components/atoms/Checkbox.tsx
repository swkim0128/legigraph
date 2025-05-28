import React from 'react';

export interface CheckboxProps {
    id?: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    checked,
    onChange,
    disabled = false,
}) => {
    return (
        <label className="inline-flex items-center space-x-2">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-800">{label}</span>
        </label>
    );
};

export default Checkbox;
