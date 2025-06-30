import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@/components/atoms/index';

const meta: Meta<typeof Radio> = {
    title: 'Atoms/Radio',
    component: Radio,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        name: 'radio',
        value: 'radio',
    },
};
