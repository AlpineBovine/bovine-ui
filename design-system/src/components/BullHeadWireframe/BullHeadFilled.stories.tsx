import type { Meta, StoryObj } from '@storybook/react-vite';

import { BullHeadFilled } from './BullHeadFilled';

const meta = {
  title: 'Components/BullHeadFilled',
  component: BullHeadFilled,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Bold wireframe bull head',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'min(760px, 86vw)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BullHeadFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};
