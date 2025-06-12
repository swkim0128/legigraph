'use client';
import React from 'react';

interface GraphCanvasProps {
    children?: React.ReactNode;
    className?: string;
}

const GraphCanvas: React.FC<GraphCanvasProps> = ({
    children,
    className = '',
}) => {
    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-gray-100 ${className}`}
        >
            {/* 그래프 시각화 라이브러리 렌더링 영역 */}
            {children}
        </div>
    );
};

export default GraphCanvas;
