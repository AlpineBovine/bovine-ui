import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'react-aria-components';

import { Notification, ToastRegion } from './Toast';
import { notify } from './toastQueue';

const meta = {
    title: 'Components/Toast',
    component: Notification,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StaticNotification: Story = {
    args: {
        title: 'Record saved',
        description: 'The animal profile was updated.',
        variant: 'success',
    },
};

export const QueuedToast: Story = {
    render: () => (
        <>
            <Button
                onPress={() =>
                    notify({
                        title: 'Sync complete',
                        description: 'Latest herd records are available.',
                        variant: 'info',
                    })
                }
            >
                Show toast
            </Button>
            <ToastRegion />
        </>
    ),
};
