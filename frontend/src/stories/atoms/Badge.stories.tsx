// components/atoms/Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '@/components/atoms/Badge';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'warning', 'error', 'info'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'New',
        variant: 'info',
        size: 'md',
    },
};
