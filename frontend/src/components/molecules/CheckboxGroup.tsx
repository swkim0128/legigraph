import React from 'react';
import Checkbox from '@/components/atoms/Checkbox';

export interface CheckboxOption {
    label: string;
    value: string;
}

export interface CheckboxGroupProps {
    name: string;
    options: CheckboxOption[];
    selected: string[];
    onChange: (values: string[]) => void;
}

const CheckboxGroup = ({
    name,
    options,
    selected,
    onChange,
}: CheckboxGroupProps) => {
    const handleChange = (value: string) => {
        const isChecked = selected.includes(value);
        const updated = isChecked
            ? selected.filter((v) => v !== value)
            : [...selected, value];
        onChange(updated);
    };

    return (
        <div className="space-y-2">
            {options.map((opt) => (
                <Checkbox
                    key={opt.value}
                    id={`${name}-${opt.value}`}
                    label={opt.label}
                    checked={selected.includes(opt.value)}
                    onChange={() => handleChange(opt.value)}
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;
