import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/atoms/index';

const meta: Meta<typeof Select> = {
    title: 'Atoms/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {},
};
