import React from 'react';
import Avatar from '@/components/atoms/Avatar';

interface AvatarWithTextProps {
    src: string;
    alt: string;
    name: string;
    description?: string;
}

const AvatarWithText = ({
    src,
    alt,
    name,
    description,
}: AvatarWithTextProps) => {
    return (
        <div className="flex items-center space-x-3">
            <Avatar src={src} alt={alt} />
            <div>
                <p className="font-medium">{name}</p>
                {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                )}
            </div>
        </div>
    );
};

export default AvatarWithText;
