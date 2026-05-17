import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from './TextField';

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Name',
        placeholder: 'Jane Doe',
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
    args: {
        defaultValue: 'Jane Doe',
    },
};
