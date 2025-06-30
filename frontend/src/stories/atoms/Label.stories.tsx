import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/atoms/index';

const meta: Meta<typeof Label> = {
    title: 'Atoms/Label',
    component: Label,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        htmlFor: 'example',
        children: '이메일',
    },
};

export const Required: Story = {
    args: {
        htmlFor: 'required-example',
        children: '이름',
    },
};
