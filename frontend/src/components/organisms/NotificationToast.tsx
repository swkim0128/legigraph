// NotificationToast.tsx
'use client';
import React from 'react';

interface NotificationToastProps {
    message: string;
    type?: 'success' | 'error';
}

const NotificationToast = ({
    message,
    type = 'success',
}: NotificationToastProps) => {
    const baseStyle =
        'fixed bottom-4 right-4 px-4 py-2 rounded shadow text-white';
    const typeStyle = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return <div className={`${baseStyle} ${typeStyle}`}>{message}</div>;
};

export default NotificationToast;
