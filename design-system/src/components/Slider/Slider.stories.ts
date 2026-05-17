import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider';

const meta = {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Volume',
        defaultValue: 45,
        minValue: 0,
        maxValue: 100,
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Stepped: Story = {
    args: {
        label: 'Herd capacity',
        defaultValue: 60,
        step: 10,
    },
};
