import {
    Button,
    Disclosure,
    DisclosurePanel,
    Heading,
} from 'react-aria-components';
import type { DisclosureProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './accordion.css';

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface AccordionProps {
    items: AccordionItem[];
    defaultExpandedKeys?: string[];
}

export const Accordion = ({ items, defaultExpandedKeys = [] }: AccordionProps) => {
    return (
        <div className="accordion">
            {items.map((item) => (
                <AccordionDisclosure
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    defaultExpanded={defaultExpandedKeys.includes(item.id)}
                >
                    {item.content}
                </AccordionDisclosure>
            ))}
        </div>
    );
};

export interface AccordionDisclosureProps extends Omit<DisclosureProps, 'children'> {
    title: string;
    children: React.ReactNode;
}

export const AccordionDisclosure = ({ title, children, ...props }: AccordionDisclosureProps) => {
    return (
        <Disclosure className="accordion-item" {...props}>
            {({ isExpanded }) => (
                <>
                    <Heading className="accordion-heading">
                        <Button slot="trigger" className="accordion-trigger">
                            <Typography as="span" variant="body">
                                {title}
                            </Typography>
                            <span aria-hidden="true" className="accordion-icon">
                                {isExpanded ? '-' : '+'}
                            </span>
                        </Button>
                    </Heading>
                    <DisclosurePanel className="accordion-panel">{children}</DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};
