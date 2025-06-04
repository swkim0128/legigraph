import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'Atoms/Image',
    component: Image,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: '/avatar.png', // public 폴더에 있는 테스트 이미지
        alt: 'Avatar',
        width: 100,
        height: 100,
    },
};

export const Rounded: Story = {
    args: {
        src: '/avatar.png',
        alt: 'Rounded Avatar',
        width: 100,
        height: 100,
        rounded: true,
    },
};
