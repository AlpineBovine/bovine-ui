import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '../Typography/Typography';
import { Accordion } from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { id: 'feeding', title: 'Feeding plan', content: <Typography variant="body">Review ration adjustments weekly.</Typography> },
            { id: 'health', title: 'Health checks', content: <Typography variant="body">Schedule wellness checks before transport.</Typography> },
            { id: 'records', title: 'Records', content: <Typography variant="body">Keep weight and treatment notes up to date.</Typography> },
        ],
        defaultExpandedKeys: ['feeding'],
    },
};
