import { Button as AriaButton } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './button.css';

export interface ButtonProps {
    primary?: boolean;
    label: string;
    onPress?: () => void;
    disabled?: boolean;
}

export const Button = ({
    primary = false,
    label,
    onPress,
    disabled = false,
}: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';

    return (
        <AriaButton
            className={['button', mode].join(' ')}
            onPress={onPress}
            isDisabled={disabled}
        >
            <Typography as="span" variant="body">
                {label}
            </Typography>
        </AriaButton>
    );
};
