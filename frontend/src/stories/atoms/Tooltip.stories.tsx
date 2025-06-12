import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/components/atoms/Tooltip';
import Button from '@/components/atoms/Button';

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
        children: <Button label="마우스를 올려보세요" />,
        text: '툴팁 메시지',
    },
};
