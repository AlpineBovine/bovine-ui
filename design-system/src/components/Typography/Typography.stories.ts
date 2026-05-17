import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from './Typography';

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    args: {
        children: 'Typography sample text',
    },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
    args: {
        variant: 'body',
        children: 'This is body text used for standard content and paragraphs.',
    },
};

export const Title: Story = {
    args: {
        variant: 'title',
        as: 'h2',
        children: 'This is a title used for headings and section labels.',
    },
};

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'This is caption text used for annotations and labels.',
    },
};
