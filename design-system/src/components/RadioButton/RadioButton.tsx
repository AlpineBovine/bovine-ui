import { RadioGroup, Radio } from 'react-aria-components';
import type { RadioGroupProps as AriaRadioGroupProps, RadioProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './radiobutton.css';

export interface RadioButtonProps extends Omit<RadioProps, 'children'> {
    label?: string;
}

export const RadioButton = ({ label, value, ...props }: RadioButtonProps) => {
    return (
        <Radio className="radio-button" value={value} {...props}>
            {({ isSelected }) => (
                <div className="radio-wrapper">
                    <div className={`radio-circle ${isSelected ? 'radio-circle--selected' : ''}`}>
                        {isSelected && <span className="radio-dot" />}
                    </div>
                    {label && (
                        <Typography as="label" variant="body" className="radio-label">
                            {label}
                        </Typography>
                    )}
                </div>
            )}
        </Radio>
    );
};

export interface RadioGroupProps extends AriaRadioGroupProps {
    label?: string;
    options?: Array<{ value: string; label: string }>;
}

export const RadioGroupComponent = ({ label, options, children, ...props }: RadioGroupProps) => {
    return (
        <div className="radio-group-wrapper">
            {label && (
                <Typography as="label" variant="body" className="radio-group-label">
                    {label}
                </Typography>
            )}
            <RadioGroup className="radio-group" {...props}>
                {options
                    ? options.map((option) => (
                        <RadioButton key={option.value} value={option.value} label={option.label} />
                    ))
                    : children}
            </RadioGroup>
        </div>
    );
};
