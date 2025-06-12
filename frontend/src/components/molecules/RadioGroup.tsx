import React from 'react';
import Radio from '@/components/atoms/Radio';

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    selected: string;
    onChange: (value: string) => void;
}

const RadioGroup = ({ name, options, selected, onChange }: RadioGroupProps) => {
    return (
        <div className="space-y-2">
            {options.map((opt) => (
                <Radio
                    key={opt.value}
                    id={`${name}-${opt.value}`}
                    label={opt.label}
                    checked={selected === opt.value}
                    onChange={() => onChange(opt.value)}
                />
            ))}
        </div>
    );
};

export default RadioGroup;
