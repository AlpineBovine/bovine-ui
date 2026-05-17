import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tooltip } from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        content: 'Helpful tooltip text',
        children: <button type="button">Hover me</button>,
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const LongerContent: Story = {
    args: {
        content: 'This tooltip includes a longer explanation for the trigger.',
        children: <button type="button">Hover for more details</button>,
    },
};
