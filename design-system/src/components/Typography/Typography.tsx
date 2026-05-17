import type { ElementType, ReactNode } from 'react';

import './typography.css';

export interface TypographyProps {
    variant?: 'body' | 'title' | 'caption';
    as?: ElementType;
    children: ReactNode;
    className?: string;
}

const variantClassNames: Record<NonNullable<TypographyProps['variant']>, string> = {
    body: 'typography--body',
    title: 'typography--title',
    caption: 'typography--caption',
};

export const Typography = ({
    variant = 'body',
    as: Component = 'p',
    children,
    className = '',
}: TypographyProps) => {
    return (
        <Component className={['typography', variantClassNames[variant], className].filter(Boolean).join(' ')}>
            {children}
        </Component>
    );
};
