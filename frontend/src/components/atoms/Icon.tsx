// components/atoms/Icon.tsx
import * as LucideIcons from 'lucide-react';
import React from 'react';
import clsx from 'clsx';

export interface IconProps {
    name: keyof typeof LucideIcons;
    className?: string;
    strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
    name,
    className = 'w-5 h-5',
    strokeWidth = 2,
}) => {
    const LucideIcon = LucideIcons[name] as React.FC<{
        className?: string;
        strokeWidth?: number;
    }>;

    if (!LucideIcon) {
        return <span className="text-red-500">Invalid icon: {name}</span>;
    }
    return <LucideIcon className={clsx(className)} strokeWidth={strokeWidth} />;
};

export default Icon;
