import type { Meta, StoryObj } from '@storybook/react';
import ImageCard from './ImageCard';

const meta: Meta<typeof ImageCard> = {
    title: 'Molecules/ImageCard',
    component: ImageCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
    args: {
        imageSrc: 'https://via.placeholder.com/600x300',
        altText: '예시 이미지',
        title: '법안 정보 카드',
        description: '이것은 법안 설명에 대한 요약입니다.',
        width: 600,
        height: 300,
    },
};
