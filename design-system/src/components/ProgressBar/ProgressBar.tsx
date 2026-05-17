import { ProgressBar as AriaProgressBar } from 'react-aria-components';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './progressbar.css';

export interface ProgressBarProps extends AriaProgressBarProps {
    label?: string;
}

export const ProgressBar = ({ label, ...props }: ProgressBarProps) => {
    return (
        <AriaProgressBar className="progress-bar" {...props}>
            {({ percentage, valueText }) => (
                <>
                    {(label || valueText) && (
                        <div className="progress-bar-header">
                            {label && (
                                <Typography as="span" variant="body">
                                    {label}
                                </Typography>
                            )}
                            {valueText && (
                                <Typography as="span" variant="caption" className="progress-bar-value">
                                    {valueText}
                                </Typography>
                            )}
                        </div>
                    )}
                    <div className="progress-bar-track">
                        <div className="progress-bar-fill" style={{ width: `${percentage ?? 0}%` }} />
                    </div>
                </>
            )}
        </AriaProgressBar>
    );
};
