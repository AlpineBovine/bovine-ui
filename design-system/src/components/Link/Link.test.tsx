import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
    it('renders a link with text', () => {
        render(<Link href="#">Click me</Link>);

        const link = screen.getByRole('link', { name: 'Click me' });
        expect(link).not.toBeNull();
    });

    it('applies correct href attribute', () => {
        render(<Link href="https://example.com">Visit</Link>);

        const link = screen.getByRole('link', { name: 'Visit' });
        expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('can be disabled', () => {
        render(<Link href="#" isDisabled>Disabled Link</Link>);

        const link = screen.getByRole('link', { name: 'Disabled Link' });
        expect(link).toHaveAttribute('aria-disabled', 'true');
    });
});
