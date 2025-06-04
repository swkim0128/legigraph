import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
    title: 'Atoms/Link',
    component: Link,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        href: 'https://example.com',
        children: 'Go to Example',
        underline: true,
    },
};
