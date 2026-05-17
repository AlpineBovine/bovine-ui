import { Label as AriaLabel } from 'react-aria-components';
import type { LabelProps as AriaLabelProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './label.css';

export interface LabelProps extends AriaLabelProps {
    children: string;
    required?: boolean;
}

export const Label = ({ children, required, ...props }: LabelProps) => {
    return (
        <AriaLabel className="label" {...props}>
            <Typography as="span" variant="body">
                {children}
                {required && <span className="label-required">*</span>}
            </Typography>
        </AriaLabel>
    );
};
