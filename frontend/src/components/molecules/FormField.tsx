import React from 'react';
import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';

export interface FormFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    helperText?: string;
    errorText?: string;
    required?: boolean;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
    id,
    label,
    value,
    placeholder,
    helperText,
    errorText,
    required = false,
    onChange,
}: FormFieldProps) => {
    return (
        <div className="flex flex-col space-y-1">
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <Input
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-describedby={
                    helperText || errorText ? `${id}-desc` : undefined
                }
                className={errorText ? 'border-red-500' : ''}
            />
            {errorText ? (
                <p id={`${id}-desc`} className="text-sm text-red-600">
                    {errorText}
                </p>
            ) : helperText ? (
                <p id={`${id}-desc`} className="text-sm text-gray-500">
                    {helperText}
                </p>
            ) : null}
        </div>
    );
};

export default FormField;
