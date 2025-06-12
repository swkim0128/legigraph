'use client';

import React, { JSX } from 'react';
import type { CommonProps } from '@/types/common';
import clsx from 'clsx';

export interface BaseComponentProps extends CommonProps {
    id?: string;
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements; // div, span 등 커스텀 가능
}

const BaseComponent = ({
    as: Component = 'div',
    children,
    className,
    testId,
    style,
    ...rest
}: BaseComponentProps & Record<string, unknown>) => {
    return (
        <Component
            className={clsx(className)}
            data-testid={testId}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default BaseComponent;
