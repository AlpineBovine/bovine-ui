import { TextField as AriaTextField, TextArea as AriaTextArea, Label } from 'react-aria-components';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './textarea.css';

export interface TextAreaProps extends AriaTextFieldProps {
    label?: string;
    placeholder?: string;
    rows?: number;
}

export const TextArea = ({ label, placeholder, rows = 4, ...props }: TextAreaProps) => {
    return (
        <AriaTextField className="textarea" {...props}>
            {label && (
                <Label className="textarea-label">
                    <Typography as="span" variant="body">
                        {label}
                    </Typography>
                </Label>
            )}
            <AriaTextArea className="textarea-input" placeholder={placeholder} rows={rows} />
        </AriaTextField>
    );
};
