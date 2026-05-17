import { Typography } from '../Typography/Typography';
import './formfield.css';

export interface FormFieldProps {
    id?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    children: React.ReactNode;
}

export const FormField = ({ id, label, description, errorMessage, children }: FormFieldProps) => {
    const descriptionId = id && description ? `${id}-description` : undefined;
    const errorId = id && errorMessage ? `${id}-error` : undefined;

    return (
        <div className="form-field">
            {label && (
                <label className="form-field-label" htmlFor={id}>
                    <Typography as="span" variant="body">
                        {label}
                    </Typography>
                </label>
            )}
            <div className="form-field-control" aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}>
                {children}
            </div>
            {description && (
                <p className="typography typography--caption form-field-description" id={descriptionId}>
                    {description}
                </p>
            )}
            {errorMessage && (
                <p className="typography typography--caption form-field-error" id={errorId}>
                    {errorMessage}
                </p>
            )}
        </div>
    );
};
