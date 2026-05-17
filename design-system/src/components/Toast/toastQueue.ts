import { UNSTABLE_ToastQueue } from 'react-aria-components';
import type { ToastOptions } from 'react-aria-components';

import type { ToastMessage } from './Toast';

export const toastQueue = new UNSTABLE_ToastQueue<ToastMessage>({ maxVisibleToasts: 3 });

export const notify = (message: ToastMessage, options?: ToastOptions) => {
    return toastQueue.add(message, { timeout: 5000, ...options });
};
