import { Tooltip as AriaTooltip, TooltipTrigger } from 'react-aria-components';
import type { TooltipProps as AriaTooltipProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './tooltip.css';

export interface TooltipProps extends AriaTooltipProps {
    content: string;
    children: React.ReactNode;
}

export const Tooltip = ({ content, children, ...props }: TooltipProps) => {
    return (
        <TooltipTrigger>
            {children}
            <AriaTooltip className="tooltip" {...props}>
                <Typography as="span" variant="caption">
                    {content}
                </Typography>
            </AriaTooltip>
        </TooltipTrigger>
    );
};
