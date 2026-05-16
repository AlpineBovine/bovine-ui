import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    it('renders a label', () => {
        render(<Button label="Submit" onPress={() => { }} />);

        const button = screen.getByRole('button', { name: 'Submit' });
        expect(button).not.toBeNull();
    });

    it('applies primary styling when primary is true', () => {
        render(<Button label="Primary" primary onPress={() => { }} />);

        const button = screen.getByRole('button', { name: 'Primary' });
        expect(button.classList.contains('storybook-button--primary')).toBe(true);
    });

    it('calls onPress when clicked', () => {
        const handlePress = jest.fn();
        render(<Button label="Click" onPress={handlePress} />);

        fireEvent.click(screen.getByRole('button', { name: 'Click' }));
        expect(handlePress).toHaveBeenCalledTimes(1);
    });
});
