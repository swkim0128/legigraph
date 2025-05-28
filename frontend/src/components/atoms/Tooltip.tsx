import React from 'react';

export interface TooltipProps {
    children: React.ReactNode;
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
    return (
        <div className="relative group inline-block">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-md">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
