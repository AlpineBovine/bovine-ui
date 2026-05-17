import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './Label';

const meta = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Form label',
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
    args: {
        children: 'Email address',
        required: true,
    },
};
