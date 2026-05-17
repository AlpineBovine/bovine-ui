import {
    Button,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    Select as AriaSelect,
    SelectValue,
} from 'react-aria-components';
import type { ListBoxItemProps, SelectProps as AriaSelectProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './select.css';

export interface SelectOption {
    id: string;
    label: string;
    isDisabled?: boolean;
}

export interface SelectItemProps extends Omit<ListBoxItemProps, 'children'> {
    label: string;
}

export const SelectItem = ({ label, ...props }: SelectItemProps) => {
    return (
        <ListBoxItem className="select-item" textValue={label} {...props}>
            <Typography as="span" variant="body">
                {label}
            </Typography>
        </ListBoxItem>
    );
};

export interface SelectProps<T extends object = SelectOption> extends Omit<AriaSelectProps<T>, 'children'> {
    label?: string;
    placeholder?: string;
    options?: SelectOption[];
    children?: React.ReactNode;
}

export const Select = <T extends object = SelectOption>({
    label,
    placeholder = 'Select an option',
    options,
    children,
    ...props
}: SelectProps<T>) => {
    return (
        <AriaSelect className="select" placeholder={placeholder} {...props}>
            {label && (
                <Label className="select-label">
                    <Typography as="span" variant="body">
                        {label}
                    </Typography>
                </Label>
            )}
            <Button className="select-button">
                <SelectValue className="select-value" />
                <span aria-hidden="true" className="select-icon">
                    v
                </span>
            </Button>
            <Popover className="select-popover">
                <ListBox className="select-listbox">
                    {options
                        ? options.map((option) => (
                            <SelectItem
                                key={option.id}
                                id={option.id}
                                label={option.label}
                                isDisabled={option.isDisabled}
                            />
                        ))
                        : children}
                </ListBox>
            </Popover>
        </AriaSelect>
    );
};
