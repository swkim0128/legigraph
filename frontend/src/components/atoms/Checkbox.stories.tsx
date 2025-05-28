import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: '체크박스 예제',
        disabled: false,
    },
};
