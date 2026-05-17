import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from './TextField';

describe('TextField', () => {
    it('renders with label', () => {
        render(<TextField label="Username" />);

        const label = screen.getByText('Username');
        expect(label).not.toBeNull();
    });

    it('renders input with placeholder', () => {
        render(<TextField placeholder="Enter text" />);

        const input = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
        expect(input).not.toBeNull();
    });

    it('accepts input value', async () => {
        const user = userEvent.setup();
        render(<TextField />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        await user.type(input, 'test value');
        expect(input.value).toBe('test value');
    });

    it('can be disabled', () => {
        render(<TextField isDisabled />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.disabled).toBe(true);
    });
});
