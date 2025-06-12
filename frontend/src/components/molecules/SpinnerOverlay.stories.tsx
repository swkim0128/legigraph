import type { Meta, StoryObj } from '@storybook/react';
import SpinnerOverlay from './SpinnerOverlay';

const meta: Meta<typeof SpinnerOverlay> = {
    title: 'Molecules/SpinnerOverlay',
    component: SpinnerOverlay,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SpinnerOverlay>;

export const Default: Story = {
    args: {
        visible: true,
    },
};
