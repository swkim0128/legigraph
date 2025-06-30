// components/atoms/Icon.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/components/atoms/index';

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        className: 'w-6 h-6 text-blue-500',
    },
};
