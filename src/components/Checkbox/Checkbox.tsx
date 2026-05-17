import { Checkbox as AriaCheckbox } from 'react-aria-components';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './checkbox.css';

export interface CheckboxProps extends AriaCheckboxProps {
    label?: string;
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
    return (
        <AriaCheckbox className="checkbox" {...props}>
            {({ isSelected }) => (
                <div className="checkbox-wrapper">
                    <div className={`checkbox-box ${isSelected ? 'checkbox-box--checked' : ''}`}>
                        {isSelected && <span className="checkbox-checkmark">✓</span>}
                    </div>
                    {label && (
                        <Typography as="label" variant="body" className="checkbox-label">
                            {label}
                        </Typography>
                    )}
                </div>
            )}
        </AriaCheckbox>
    );
};
