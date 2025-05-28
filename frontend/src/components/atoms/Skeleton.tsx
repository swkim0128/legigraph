import React from 'react';
import clsx from 'clsx';

export interface SkeletonProps {
    width?: string;
    height?: string;
    rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
    width = 'w-full',
    height = 'h-4',
    rounded = true,
}) => {
    return (
        <div
            className={clsx(
                'bg-gray-200 animate-pulse',
                width,
                height,
                rounded && 'rounded'
            )}
        />
    );
};

export default Skeleton;
