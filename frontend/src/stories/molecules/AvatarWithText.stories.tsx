import type { Meta, StoryObj } from '@storybook/react';
import AvatarWithText from '@/components/molecules/AvatarWithText';

const meta: Meta<typeof AvatarWithText> = {
    title: 'Molecules/AvatarWithText',
    component: AvatarWithText,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarWithText>;

export const Default: Story = {
    args: {
        src: 'https://via.placeholder.com/48',
        alt: '사용자 아바타',
        name: '홍길동',
        description: '국회의원',
    },
};
