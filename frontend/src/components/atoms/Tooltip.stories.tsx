import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Atoms/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        text: '툴팁 메시지',
    },
};
