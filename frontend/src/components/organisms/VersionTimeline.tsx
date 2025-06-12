// VersionTimeline.tsx
'use client';
import React from 'react';

interface VersionTimelineItem {
    version: string;
    date: string;
    description: string;
}

interface VersionTimelineProps {
    items: VersionTimelineItem[];
}

const VersionTimeline = ({ items }: VersionTimelineProps) => {
    return (
        <ol className="border-l border-gray-300 space-y-4">
            {items.map((item, index) => (
                <li key={index} className="ml-4">
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="font-medium">v{item.version}</div>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                </li>
            ))}
        </ol>
    );
};

export default VersionTimeline;
