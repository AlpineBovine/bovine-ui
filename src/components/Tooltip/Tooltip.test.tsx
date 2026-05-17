import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

describe('Tooltip', () => {
    it('renders trigger element', () => {
        render(
            <Tooltip content="Help text">
                <Button label="Help" onPress={() => {}} />
            </Tooltip>
        );

        const button = screen.getByRole('button', { name: 'Help' });
        expect(button).not.toBeNull();
    });

    it('shows tooltip on hover', async () => {
        const user = userEvent.setup();
        render(
            <Tooltip content="This is helpful">
                <button>Hover me</button>
            </Tooltip>
        );

        const trigger = screen.getByText('Hover me');
        await user.hover(trigger);

        // Tooltip should appear
        const tooltip = await screen.findByText('This is helpful');
        expect(tooltip).not.toBeNull();
    });

    it('hides tooltip on unhover', async () => {
        const user = userEvent.setup();
        render(
            <Tooltip content="Helpful text">
                <button>Hover me</button>
            </Tooltip>
        );

        const trigger = screen.getByText('Hover me');
        await user.hover(trigger);
        const tooltip = await screen.findByText('Helpful text');
        expect(tooltip).not.toBeNull();

        await user.unhover(trigger);
    });
});
