import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
    title: 'Molecules/FormField',
    component: FormField,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
    render: () => {
        const FormFieldWrapper = () => {
            const [value, setValue] = useState('');
            return (
                <FormField
                    id="name"
                    label="이름"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    helperText="실명을 입력해주세요"
                    placeholder="홍길동"
                />
            );
        };

        return <FormFieldWrapper />;
    },
};

export const WithError: Story = {
    render: () => {
        const FormFieldWrapper = () => {
            const [value, setValue] = useState('');
            return (
                <FormField
                    id="email"
                    label="이메일"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    errorText="올바른 이메일을 입력해주세요"
                    placeholder="user@example.com"
                />
            );
        };

        return <FormFieldWrapper />;
    },
};
