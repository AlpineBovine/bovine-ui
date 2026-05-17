import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select, SelectItem } from './Select';

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Animal',
        placeholder: 'Choose an animal',
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const animals = [
    { id: 'bison', label: 'Bison' },
    { id: 'bull', label: 'Bull' },
    { id: 'cow', label: 'Cow' },
    { id: 'yak', label: 'Yak' },
];

export const Default: Story = {
    args: {
        options: animals,
    },
};

export const WithCustomItems: Story = {
    args: {
        children: (
            <>
                <SelectItem id="daily" label="Daily" />
                <SelectItem id="weekly" label="Weekly" />
                <SelectItem id="monthly" label="Monthly" />
            </>
        ),
    },
};
