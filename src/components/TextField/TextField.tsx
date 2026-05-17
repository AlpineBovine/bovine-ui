import { TextField as AriaTextField, Input, Label } from 'react-aria-components';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './textfield.css';

export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    placeholder?: string;
}

export const TextField = ({ label, placeholder, ...props }: TextFieldProps) => {
    return (
        <AriaTextField className="textfield" {...props}>
            {label && (
                <Label className="textfield-label">
                    <Typography as="span" variant="body">
                        {label}
                    </Typography>
                </Label>
            )}
            <Input className="textfield-input" placeholder={placeholder} />
        </AriaTextField>
    );
};
