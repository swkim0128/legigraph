// src/components/atoms/index.tsx
'use client';

import React from 'react';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { CommonProps } from '@/types/common';

// ✅ Button
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={clsx(className)} {...props}>
            {children}
        </button>
    );
};

// ✅ Input
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={clsx(
                'border px-3 py-2 rounded text-sm w-full',
                className
            )}
            {...props}
        />
    );
};

// ✅ Label
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export const Label = ({ children, className, ...props }: LabelProps) => {
    return (
        <label
            className={clsx('text-sm font-medium text-gray-700', className)}
            {...props}
        >
            {children}
        </label>
    );
};

// ✅ Checkbox
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Checkbox = ({ className, ...props }: CheckboxProps) => {
    return (
        <input
            type="checkbox"
            className={clsx('w-4 h-4 accent-blue-600', className)}
            {...props}
        />
    );
};

// ✅ Radio
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Radio = ({ className, ...props }: RadioProps) => {
    return (
        <input
            type="radio"
            className={clsx('w-4 h-4 accent-blue-600', className)}
            {...props}
        />
    );
};

// ✅ Select
export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export const Select = ({ className, children, ...props }: SelectProps) => {
    return (
        <select
            className={clsx(
                'border px-3 py-2 rounded text-sm w-full',
                className
            )}
            {...props}
        >
            {children}
        </select>
    );
};

// ✅ Textarea
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export const Textarea = ({ className, ...props }: TextareaProps) => {
    return (
        <textarea
            className={clsx(
                'border px-3 py-2 rounded text-sm w-full',
                className
            )}
            {...props}
        />
    );
};

// ✅ Toggle
export type ToggleProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Toggle = ({ className, ...props }: ToggleProps) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" {...props} />
            <div
                className={clsx(
                    'w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600',
                    className
                )}
            ></div>
        </label>
    );
};

// ✅ Icon
export interface IconProps extends CommonProps {
    icon: LucideIcon;
    size?: number;
}
export const Icon = ({
    icon: IconComponent,
    size = 20,
    className,
}: IconProps) => {
    return <IconComponent size={size} className={className} />;
};

// ✅ Badge
export interface BadgeProps extends CommonProps {
    children: React.ReactNode;
    color?: 'gray' | 'blue' | 'green' | 'red';
}
export const Badge = ({ children, color = 'gray', className }: BadgeProps) => {
    const colorMap = {
        gray: 'bg-gray-200 text-gray-800',
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        red: 'bg-red-100 text-red-800',
    };
    return (
        <span
            className={clsx(
                'text-xs px-2 py-1 rounded',
                colorMap[color],
                className
            )}
        >
            {children}
        </span>
    );
};

// ✅ Avatar
export interface AvatarProps extends CommonProps {
    src: string;
    alt?: string;
    size?: number;
}
export const Avatar = ({
    src,
    alt = 'avatar',
    size = 40,
    className,
}: AvatarProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={clsx('rounded-full object-cover', className)}
        />
    );
};

// ✅ Tooltip
export interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
}
export const Tooltip = ({ children, content }: TooltipProps) => {
    return (
        <div className="group relative inline-block">
            {children}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
                {content}
            </div>
        </div>
    );
};

// ✅ Divider
export const Divider = () => <hr className="my-4 border-t border-gray-200" />;

// ✅ Spinner
export const Spinner = () => (
    <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
);

// ✅ Link
export interface LinkProps extends CommonProps {
    href: string;
    children: React.ReactNode;
}
export const Link = ({ href, children, className }: LinkProps) => {
    return (
        <a
            href={href}
            className={clsx('text-blue-600 hover:underline', className)}
        >
            {children}
        </a>
    );
};

// ✅ Skeleton
export interface SkeletonProps extends CommonProps {
    width?: string;
    height?: string;
}
export const Skeleton = ({
    width = 'w-full',
    height = 'h-4',
    className,
}: SkeletonProps) => {
    return (
        <div
            className={clsx(
                'bg-gray-200 animate-pulse',
                width,
                height,
                className
            )}
        />
    );
};
