import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from './TextArea';

describe('TextArea', () => {
    it('renders with label', () => {
        render(<TextArea label="Description" />);

        const label = screen.getByText('Description');
        expect(label).not.toBeNull();
    });

    it('renders textarea with placeholder', () => {
        render(<TextArea placeholder="Enter description" />);

        const textarea = screen.getByPlaceholderText('Enter description') as HTMLTextAreaElement;
        expect(textarea).not.toBeNull();
    });

    it('accepts input value', async () => {
        const user = userEvent.setup();
        render(<TextArea />);

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        await user.type(textarea, 'multi\nline\ntext');
        expect(textarea.value).toBe('multi\nline\ntext');
    });

    it('sets correct number of rows', () => {
        render(<TextArea rows={6} />);

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.rows).toBe(6);
    });
});
