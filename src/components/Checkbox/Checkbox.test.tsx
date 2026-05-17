import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders checkbox with label', () => {
        render(<Checkbox label="Accept terms" />);

        const label = screen.getByText('Accept terms');
        expect(label).not.toBeNull();
    });

    it('can be toggled', async () => {
        const user = userEvent.setup();
        render(<Checkbox label="Test" />);

        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(false);

        await user.click(checkbox);
        expect(checkbox.checked).toBe(true);
    });

    it('can be disabled', () => {
        render(<Checkbox label="Disabled" isDisabled />);

        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.disabled).toBe(true);
    });

    it('can be initially checked', () => {
        render(<Checkbox label="Checked" defaultSelected />);

        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });
});
