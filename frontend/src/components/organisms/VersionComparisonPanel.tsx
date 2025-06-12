'use client';
import React from 'react';

interface VersionComparisonPanelProps {
    fromVersion: string;
    toVersion: string;
    diffContent: string;
}

const VersionComparisonPanel: React.FC<VersionComparisonPanelProps> = ({
    fromVersion,
    toVersion,
    diffContent,
}) => {
    return (
        <div className="w-full bg-white border rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">버전 비교</h3>
            <p className="text-sm text-gray-500 mb-1">
                {fromVersion} → {toVersion}
            </p>
            <pre className="bg-gray-100 text-sm p-3 rounded overflow-x-auto whitespace-pre-wrap">
                {diffContent}
            </pre>
        </div>
    );
};

export default VersionComparisonPanel;
