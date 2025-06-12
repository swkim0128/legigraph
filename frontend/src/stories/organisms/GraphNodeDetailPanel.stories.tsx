import type { Meta, StoryObj } from '@storybook/react';
import GraphNodeDetailPanel from '@/components/organisms/GraphNodeDetailPanel';

const meta: Meta<typeof GraphNodeDetailPanel> = {
    title: 'Organisms/GraphNodeDetailPanel',
    component: GraphNodeDetailPanel,
};
export default meta;

type Story = StoryObj<typeof GraphNodeDetailPanel>;

export const Default: Story = {
    args: {
        title: '법안 제목',
        status: '제안됨',
    },
};
