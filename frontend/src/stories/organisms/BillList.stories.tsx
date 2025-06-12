import type { Meta, StoryObj } from '@storybook/react';
import BillList from '@/components/organisms/BillList';

const meta: Meta<typeof BillList> = {
    title: 'Organisms/BillList',
    component: BillList,
};

export default meta;

type Story = StoryObj<typeof BillList>;

export const Default: Story = {
    args: {
        bills: [
            { id: '1', title: '법안 1', status: '', sponsor: '' },
            { id: '2', title: '법안 2', status: '', sponsor: '' },
        ],
    },
};
