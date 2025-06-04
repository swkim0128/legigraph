// components/atoms/Link.tsx
import NextLink from 'next/link';
import React from 'react';
import clsx from 'clsx';

export interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    underline?: boolean;
}

const Link: React.FC<LinkProps> = ({
    href,
    children,
    className = '',
    target,
    underline = true,
}) => {
    return (
        <NextLink
            href={href}
            target={target}
            className={clsx(
                'text-blue-600 hover:text-blue-800',
                underline && 'underline',
                className
            )}
        >
            {children}
        </NextLink>
    );
};

export default Link;
