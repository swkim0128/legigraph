// components/atoms/Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/atoms/index';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'New',
    },
};
