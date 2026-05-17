import { Switch as AriaSwitch } from 'react-aria-components';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './switch.css';

export interface SwitchProps extends AriaSwitchProps {
    label?: string;
}

export const Switch = ({ label, ...props }: SwitchProps) => {
    return (
        <AriaSwitch className="switch" {...props}>
            {({ isSelected }) => (
                <div className="switch-wrapper">
                    <div className={`switch-track ${isSelected ? 'switch-track--on' : ''}`}>
                        <span className="switch-thumb" />
                    </div>
                    {label && (
                        <Typography as="label" variant="body" className="switch-label">
                            {label}
                        </Typography>
                    )}
                </div>
            )}
        </AriaSwitch>
    );
};
