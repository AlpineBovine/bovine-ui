import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Modal } from './Modal';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Modal title',
        children: 'This modal contains important information and actions.',
        isOpen: true,
        onClose: fn(),
        closeButtonLabel: 'Close',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};

export const NonDismissable: Story = {
    args: {
        isDismissable: false,
    },
};
