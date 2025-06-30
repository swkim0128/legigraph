import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/atoms/index';

const meta: Meta<typeof Checkbox> = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        disabled: false,
    },
};
