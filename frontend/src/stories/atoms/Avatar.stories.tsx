import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/atoms/Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: 'Profile Image',
        size: 40,
    },
};
