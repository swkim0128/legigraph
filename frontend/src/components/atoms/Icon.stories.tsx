// components/atoms/Icon.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ['Check', 'X', 'AlertTriangle', 'ArrowRight', 'Circle'],
        },
        strokeWidth: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        name: 'Check',
        className: 'w-6 h-6 text-blue-500',
    },
};
