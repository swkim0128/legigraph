import React from 'react';
import clsx from 'clsx';

export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    initials?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', initials }) => {
    const sizeClasses = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-md',
        lg: 'w-16 h-16 text-lg',
    };

    return src ? (
        <image
            src={src}
            alt={alt}
            className={clsx('rounded-full object-cover', sizeClasses[size])}
        />
    ) : (
        <div
            className={clsx(
                'rounded-full bg-gray-300 text-white flex items-center justify-center font-bold',
                sizeClasses[size]
            )}
        >
            {initials || '?'}
        </div>
    );
};

export default Avatar;
