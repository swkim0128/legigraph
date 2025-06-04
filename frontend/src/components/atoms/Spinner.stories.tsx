import { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Atoms/Spinner',
    component: Spinner,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Medium: Story = {
    args: {
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};
