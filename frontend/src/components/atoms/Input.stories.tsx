import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: { type: 'text' },
        },
        value: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: '입력하세요',
    },
};
