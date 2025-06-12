import type { Meta, StoryObj } from '@storybook/react';
import Select from '@/components/atoms/Select';

const meta: Meta<typeof Select> = {
    title: 'Atoms/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        options: [
            { key: '1', value: '1', label: '선택 1' },
            { key: '2', value: '2', label: '선택 2' },
        ],
    },
};
