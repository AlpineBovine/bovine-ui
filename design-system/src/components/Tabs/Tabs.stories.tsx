import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '../Typography/Typography';
import { Tabs } from './Tabs';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [
            { id: 'overview', label: 'Overview', content: <Typography variant="body">Current herd summary and alerts.</Typography> },
            { id: 'health', label: 'Health', content: <Typography variant="body">Vaccination, weight, and wellness records.</Typography> },
            { id: 'history', label: 'History', content: <Typography variant="body">Recent events across the operation.</Typography> },
        ],
    },
};

export const DisabledTab: Story = {
    args: {
        tabs: [
            { id: 'active', label: 'Active', content: <Typography variant="body">Active animals.</Typography> },
            { id: 'archived', label: 'Archived', content: <Typography variant="body">Archived animals.</Typography>, isDisabled: true },
        ],
    },
};
