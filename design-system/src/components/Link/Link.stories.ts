import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './Link';

const meta = {
    title: 'Components/Link',
    component: Link,
    tags: ['autodocs'],
    args: {
        href: '#',
        children: 'Learn more',
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
    args: {
        href: 'https://example.com',
        target: '_blank',
        children: 'Open external docs',
    },
};
