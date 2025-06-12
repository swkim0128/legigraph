import type { Meta, StoryObj } from '@storybook/react';
import GraphCanvas from '@/components/organisms/GraphCanvas';

const meta: Meta<typeof GraphCanvas> = {
    title: 'Organisms/GraphCanvas',
    component: GraphCanvas,
};
export default meta;

type Story = StoryObj<typeof GraphCanvas>;

export const Default: Story = {};
