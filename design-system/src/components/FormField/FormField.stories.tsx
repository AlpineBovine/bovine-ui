import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from '../TextField/TextField';
import { FormField } from './FormField';

const meta = {
    title: 'Components/FormField',
    component: FormField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 'ranch-name',
        label: 'Ranch name',
        description: 'Shown in shared reports.',
        children: <TextField aria-label="Ranch name" placeholder="North pasture" />,
    },
};

export const WithError: Story = {
    args: {
        id: 'email',
        label: 'Email',
        errorMessage: 'Enter a valid email address.',
        children: <TextField aria-label="Email" placeholder="name@example.com" isInvalid />,
    },
};
