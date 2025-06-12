// components/atoms/Image.tsx
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';
import clsx from 'clsx';

export interface ImageProps extends NextImageProps {
    className?: string;
    rounded?: boolean;
}

const Image: React.FC<ImageProps> = ({
    className,
    rounded = false,
    ...props
}) => {
    return (
        <NextImage
            className={clsx(className, rounded && 'rounded-full')}
            {...props}
        />
    );
};

export default Image;
