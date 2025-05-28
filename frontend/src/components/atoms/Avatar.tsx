import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
    className?: string;
    fallbackSrc?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = '사용자 아바타',
    size = 40,
    className,
    fallbackSrc = '/images/avatar-default.png',
}) => {
    const [imgSrc, setImageSrc] = React.useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={size}
            height={size}
            onError={() => setImageSrc(fallbackSrc)}
            className={clsx('rounded-full object-cover', className)}
            priority
        />
    );
};

export default Avatar;
