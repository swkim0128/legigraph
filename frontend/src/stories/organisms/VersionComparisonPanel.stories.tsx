import type { Meta, StoryObj } from '@storybook/react';
import VersionComparisonPanel from '@/components/organisms/VersionComparisonPanel';

const meta: Meta<typeof VersionComparisonPanel> = {
    title: 'Organisms/VersionComparisonPanel',
    component: VersionComparisonPanel,
};
export default meta;

type Story = StoryObj<typeof VersionComparisonPanel>;

export const Default: Story = {
    args: {
        fromVersion: '초안 내용입니다.',
        toVersion: '수정된 버전 내용입니다.',
        diffContent: '비교 내용입니다.',
    },
};
