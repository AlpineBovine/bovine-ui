import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar';

const meta = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Upload progress',
        value: 68,
        minValue: 0,
        maxValue: 100,
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
    args: {
        label: 'Syncing',
        value: undefined,
    },
};
