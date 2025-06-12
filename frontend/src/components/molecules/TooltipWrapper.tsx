import React from 'react';
import Tooltip from '@/components/atoms/Tooltip';

interface TooltipWrapperProps {
    children: React.ReactNode;
    message: string;
}

const TooltipWrapper = ({ children, message }: TooltipWrapperProps) => {
    return <Tooltip text={message}>{children}</Tooltip>;
};

export default TooltipWrapper;
