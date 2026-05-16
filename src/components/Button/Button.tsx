import { Button as AriaButton } from 'react-aria-components';

import './button.css';

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onPress?: () => void;
    disabled?: boolean;
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    onPress,
    disabled = false,
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <AriaButton
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            onPress={onPress}
            isDisabled={disabled}
        >
            {label}
        </AriaButton>
    );
};
