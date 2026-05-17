import {
    Button as AriaButton,
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    MenuTrigger as AriaMenuTrigger,
    Popover,
} from 'react-aria-components';
import type {
    MenuItemProps as AriaMenuItemProps,
    MenuProps as AriaMenuProps,
    MenuTriggerProps as AriaMenuTriggerProps,
} from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './menu.css';

export interface MenuItemData {
    id: string;
    label: string;
    description?: string;
    isDisabled?: boolean;
}

export interface MenuItemProps extends Omit<AriaMenuItemProps, 'children'> {
    label?: string;
    description?: string;
    children?: React.ReactNode;
}

export const MenuItem = ({ label, description, children, ...props }: MenuItemProps) => {
    return (
        <AriaMenuItem className="menu-item" textValue={label} {...props}>
            <Typography as="span" variant="body" className="menu-item-label">
                {children ?? label}
            </Typography>
            {description && (
                <Typography as="span" variant="caption" className="menu-item-description">
                    {description}
                </Typography>
            )}
        </AriaMenuItem>
    );
};

export interface MenuProps<T extends MenuItemData = MenuItemData> extends AriaMenuProps<T> {
    items?: Iterable<T>;
}

export const Menu = <T extends MenuItemData = MenuItemData>({ items, children, ...props }: MenuProps<T>) => {
    return (
        <AriaMenu className="menu-list" items={items} {...props}>
            {items
                ? (item) => (
                    <MenuItem id={item.id} label={item.label} description={item.description} isDisabled={item.isDisabled} />
                )
                : children}
        </AriaMenu>
    );
};

export interface MenuTriggerProps extends Omit<AriaMenuTriggerProps, 'children'> {
    triggerLabel: string;
    children: React.ReactNode;
}

export const MenuTrigger = ({ triggerLabel, children, ...props }: MenuTriggerProps) => {
    return (
        <AriaMenuTrigger {...props}>
            <AriaButton className="menu-trigger">
                <Typography as="span" variant="body">
                    {triggerLabel}
                </Typography>
                <span aria-hidden="true" className="menu-trigger-icon">
                    v
                </span>
            </AriaButton>
            <Popover className="menu-popover">{children}</Popover>
        </AriaMenuTrigger>
    );
};
