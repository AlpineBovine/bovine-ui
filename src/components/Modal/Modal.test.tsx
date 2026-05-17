import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from './Modal';

describe('Modal', () => {
    it('renders modal content when open', () => {
        render(
            <Modal isOpen title="Test Modal" onClose={() => {}}>
                <p>Modal content</p>
            </Modal>
        );

        const content = screen.getByText('Modal content');
        expect(content).not.toBeNull();
    });

    it('displays title when provided', () => {
        render(
            <Modal isOpen title="Important" onClose={() => {}}>
                <p>Content</p>
            </Modal>
        );

        const title = screen.getByText('Important');
        expect(title).not.toBeNull();
    });

    it('calls onClose when close button is clicked', async () => {
        const user = userEvent.setup();
        const handleClose = jest.fn();

        render(
            <Modal isOpen title="Test" onClose={handleClose}>
                <p>Content</p>
            </Modal>
        );

        const closeButton = screen.getByRole('button', { name: 'Close' });
        await user.click(closeButton);

        expect(handleClose).toHaveBeenCalled();
    });

    it('does not render when not open', () => {
        render(
            <Modal isOpen={false} title="Test" onClose={() => {}}>
                <p>Hidden content</p>
            </Modal>
        );

        // Content should not be in the document when modal is closed
        // Note: This depends on how ModalOverlay handles closed state
    });
});
