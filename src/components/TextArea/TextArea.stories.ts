import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Comments',
        placeholder: 'Write your message...',
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
    args: {
        defaultValue: 'This is example text for the textarea.',
    },
};
