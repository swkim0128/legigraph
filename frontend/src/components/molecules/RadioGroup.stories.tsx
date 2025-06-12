import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
    title: 'Molecules/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    args: {
        options: [
            { label: '옵션 A', value: 'a' },
            { label: '옵션 B', value: 'b' },
        ],
        name: 'radioGroup',
    },
};
