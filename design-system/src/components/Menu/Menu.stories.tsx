import type { Meta, StoryObj } from '@storybook/react-vite';

import { Menu, MenuItem, MenuTrigger } from './Menu';

const meta = {
    title: 'Components/Menu',
    component: MenuTrigger,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

const actions = [
    { id: 'new', label: 'New file', description: 'Create a blank document' },
    { id: 'duplicate', label: 'Duplicate', description: 'Copy the current item' },
    { id: 'archive', label: 'Archive', isDisabled: true },
    { id: 'delete', label: 'Delete' },
];

export const Default: Story = {
    args: {
        triggerLabel: 'Actions',
        children: <Menu items={actions} onAction={(key) => console.log(key)} />,
    },
};

export const CustomItems: Story = {
    args: {
        triggerLabel: 'View',
        children: (
            <Menu>
                <MenuItem id="grid" label="Grid" />
                <MenuItem id="list" label="List" />
                <MenuItem id="compact" label="Compact" description="Reduce spacing between rows" />
            </Menu>
        ),
    },
};
