import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
    it('renders children text', () => {
        render(<Typography>Copy text</Typography>);

        expect(screen.getByText('Copy text')).toBeInTheDocument();
    });

    it('applies the title variant class', () => {
        render(<Typography variant="title">Heading</Typography>);

        const text = screen.getByText('Heading');
        expect(text.classList.contains('typography--title')).toBe(true);
    });

    it('supports a custom element with the as prop', () => {
        render(<Typography as="span">Inline text</Typography>);

        const text = screen.getByText('Inline text');
        expect(text.tagName).toBe('SPAN');
    });
});
