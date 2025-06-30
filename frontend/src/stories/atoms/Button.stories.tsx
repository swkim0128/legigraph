// src/components/atoms/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/atoms/index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Danger: Story = {
    args: {
        label: 'Danger Button',
        variant: 'danger',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Button',
        disabled: true,
    },
};
