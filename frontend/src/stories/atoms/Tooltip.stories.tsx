import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/atoms/index';

const meta: Meta<typeof Tooltip> = {
    title: 'Atoms/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {},
};
