import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Label', () => {
    it('renders label text', () => {
        render(<Label>Email</Label>);

        const label = screen.getByText('Email');
        expect(label).not.toBeNull();
    });

    it('shows required indicator when required is true', () => {
        render(<Label required>Password</Label>);

        const required = screen.getByText('*');
        expect(required).not.toBeNull();
    });

    it('does not show required indicator when required is false', () => {
        render(<Label required={false}>Optional Field</Label>);

        const text = screen.getByText('Optional Field');
        expect(text).not.toBeNull();
    });
});
