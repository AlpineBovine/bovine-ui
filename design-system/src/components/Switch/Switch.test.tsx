import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';

describe('Switch', () => {
    it('renders switch with label', () => {
        render(<Switch label="Enable notifications" />);

        const label = screen.getByText('Enable notifications');
        expect(label).not.toBeNull();
    });

    it('can be toggled', async () => {
        const user = userEvent.setup();
        render(<Switch label="Test" />);

        const switchElement = screen.getByRole('switch') as HTMLInputElement;
        expect(switchElement.checked).toBe(false);

        await user.click(switchElement);
        expect(switchElement.checked).toBe(true);
    });

    it('can be initially on', () => {
        render(<Switch label="Enabled" defaultSelected />);

        const switchElement = screen.getByRole('switch') as HTMLInputElement;
        expect(switchElement.checked).toBe(true);
    });

    it('can be disabled', () => {
        render(<Switch label="Disabled" isDisabled />);

        const switchElement = screen.getByRole('switch') as HTMLInputElement;
        expect(switchElement.disabled).toBe(true);
    });
});
