'use client';
import React from 'react';
import Badge from '@/components/atoms/Badge';

interface GraphNodeDetailPanelProps {
    title: string;
    description?: string;
    authors?: string[];
    status?: string;
    onClose?: () => void;
}

const GraphNodeDetailPanel: React.FC<GraphNodeDetailPanelProps> = ({
    title,
    description,
    authors = [],
    status = 'pending',
    onClose,
}) => {
    return (
        <aside className="absolute right-0 top-0 w-80 h-full bg-white border-l p-4 shadow-xl z-10">
            <button className="mb-2 text-sm text-gray-500" onClick={onClose}>
                닫기
            </button>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {description && (
                <p className="text-sm text-gray-700 mb-3">{description}</p>
            )}
            {authors.length > 0 && (
                <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500">
                        발의자:{' '}
                    </span>
                    {authors.map((author, idx) => (
                        <span
                            key={idx}
                            className="inline-block mr-2 text-sm text-gray-700"
                        >
                            {author}
                        </span>
                    ))}
                </div>
            )}
            <Badge variant={'default'}>{status}</Badge>
        </aside>
    );
};

export default GraphNodeDetailPanel;
