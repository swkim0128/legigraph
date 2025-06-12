import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import CheckboxGroup from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
    title: 'Molecules/CheckboxGroup',
    component: CheckboxGroup,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
    render: (args) => {
        const [, updateArgs] = useArgs();

        const handleChange = (newSelected: string[]) => {
            updateArgs({ selected: newSelected });
        };

        return <CheckboxGroup {...args} onChange={handleChange} />;
    },
    args: {
        name: 'checkboxGroup',
        options: [
            { label: '선택 1', value: 'option1' },
            { label: '선택 2', value: 'option2' },
        ],
        selected: [],
    },
};
