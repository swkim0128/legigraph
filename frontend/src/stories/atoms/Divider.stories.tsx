import { Meta, StoryObj } from '@storybook/react';
import Divider from '@/components/atoms/Divider';

const meta: Meta<typeof Divider> = {
    title: 'Atoms/Divider',
    component: Divider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        className: 'h-16',
    },
};
