import { Link as AriaLink } from 'react-aria-components';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './link.css';

export interface LinkProps extends Omit<AriaLinkProps, 'children'> {
    children: string;
}

export const Link = ({ children, ...props }: LinkProps) => {
    return (
        <AriaLink className="link" {...props}>
            <Typography as="span" variant="body">
                {children}
            </Typography>
        </AriaLink>
    );
};
