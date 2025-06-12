import type { Meta, StoryObj } from '@storybook/react';
import TooltipWrapper from '@/components/molecules/TooltipWrapper';
import Button from '@/components/atoms/Button';

const meta: Meta<typeof TooltipWrapper> = {
    title: 'Molecules/TooltipWrapper',
    component: TooltipWrapper,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipWrapper>;

export const Default: Story = {
    args: {
        message: '이것은 툴팁입니다.',
        children: <Button label="마우스를 올려보세요" />,
    },
};
