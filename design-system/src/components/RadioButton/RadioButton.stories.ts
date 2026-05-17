import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroupComponent } from './RadioButton';

const meta = {
    title: 'Components/RadioButton',
    component: RadioGroupComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Choose an option',
        options: [
            { value: 'option-1', label: 'Option 1' },
            { value: 'option-2', label: 'Option 2' },
        ],
        defaultValue: 'option-1',
    },
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondaryOption: Story = {
    args: {
        defaultValue: 'option-2',
    },
};
