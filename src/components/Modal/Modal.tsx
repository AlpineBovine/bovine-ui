import { Dialog, Modal as AriaModal, ModalOverlay, Heading, Button as AriaButton } from 'react-aria-components';
import type { ModalProps as AriaModalProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import './modal.css';

export interface ModalProps extends Omit<AriaModalProps, 'children'> {
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    closeButtonLabel?: string;
    isDismissable?: boolean;
}

export const Modal = ({
    title,
    children,
    onClose,
    closeButtonLabel = 'Close',
    isDismissable = true,
    isOpen,
    ...props
}: ModalProps) => {
    return (
        <ModalOverlay isDismissable={isDismissable} isOpen={isOpen} onOpenChange={() => onClose?.()}>
            <AriaModal className="modal" {...props}>
                <Dialog className="modal-dialog">
                    {title && (
                        <Heading className="modal-title" level={2}>
                            <Typography as="span" variant="title">
                                {title}
                            </Typography>
                        </Heading>
                    )}
                    <div className="modal-content">{children}</div>
                    {onClose && (
                        <div className="modal-footer">
                            <Button label={closeButtonLabel} onPress={onClose} primary />
                        </div>
                    )}
                </Dialog>
            </AriaModal>
        </ModalOverlay>
    );
};
