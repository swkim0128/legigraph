import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '@/components/atoms/Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        rounded: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        width: 'w-48',
        height: 'h-6',
        rounded: true,
    },
};
