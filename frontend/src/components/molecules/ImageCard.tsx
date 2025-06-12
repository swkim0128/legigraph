import React from 'react';
import Image from '@/components/atoms/Image';

interface ImageCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    description?: string;
    width?: number;
    height?: number;
}

const ImageCard = ({
    imageSrc,
    altText,
    title,
    description,
    width,
    height,
}: ImageCardProps) => {
    return (
        <div className="rounded-xl overflow-hidden border shadow-md bg-white w-full">
            <Image
                className="w-full h-48 object-cover"
                rounded={false}
                src={imageSrc}
                alt={altText}
                width={width}
                height={height}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {description && (
                    <p className="text-sm text-gray-600 mt-2">{description}</p>
                )}
            </div>
        </div>
    );
};

export default ImageCard;
