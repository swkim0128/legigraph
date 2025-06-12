// FilterPanel.tsx
'use client';
import React from 'react';
import Checkbox from '@/components/atoms/Checkbox';

interface FilterOption {
    label: string;
    value: string;
    checked: boolean;
}

interface FilterPanelProps {
    options: FilterOption[];
    onChange: (value: string) => void;
}

const FilterPanel = ({ options, onChange }: FilterPanelProps) => {
    return (
        <div className="space-y-2">
            {options.map((option) => (
                <Checkbox
                    key={option.value}
                    id={option.value}
                    label={option.label}
                    checked={option.checked}
                    onChange={() => onChange(option.value)}
                />
            ))}
        </div>
    );
};

export default FilterPanel;
