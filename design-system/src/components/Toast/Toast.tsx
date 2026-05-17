import {
    Button,
    UNSTABLE_Toast as AriaToast,
    UNSTABLE_ToastContent,
    UNSTABLE_ToastRegion,
} from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import { toastQueue } from './toastQueue';
import './toast.css';

export interface ToastMessage {
    title: string;
    description?: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
}

export interface ToastRegionProps {
    queue?: typeof toastQueue;
}

export const ToastRegion = ({ queue = toastQueue }: ToastRegionProps) => {
    return (
        <UNSTABLE_ToastRegion<ToastMessage> className="toast-region" queue={queue}>
            {({ toast }) => (
                <AriaToast<ToastMessage> className={`toast toast--${toast.content.variant ?? 'info'}`} toast={toast}>
                    <UNSTABLE_ToastContent className="toast-content">
                        <Typography as="strong" variant="body" className="toast-title">
                            {toast.content.title}
                        </Typography>
                        {toast.content.description && (
                            <Typography as="span" variant="caption" className="toast-description">
                                {toast.content.description}
                            </Typography>
                        )}
                    </UNSTABLE_ToastContent>
                    <Button className="toast-close" slot="close">
                        Close
                    </Button>
                </AriaToast>
            )}
        </UNSTABLE_ToastRegion>
    );
};

export type NotificationProps = ToastMessage;

export const Notification = ({ title, description, variant = 'info' }: NotificationProps) => {
    return (
        <div className={`toast toast--${variant}`}>
            <div className="toast-content">
                <Typography as="strong" variant="body" className="toast-title">
                    {title}
                </Typography>
                {description && (
                    <Typography as="span" variant="caption" className="toast-description">
                        {description}
                    </Typography>
                )}
            </div>
        </div>
    );
};
