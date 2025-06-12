// TabSwitcher.tsx
'use client';
import React from 'react';

interface Tab {
    label: string;
    value: string;
}

interface TabSwitcherProps {
    tabs: Tab[];
    active: string;
    onTabChange: (value: string) => void;
}

const TabSwitcher = ({ tabs, active, onTabChange }: TabSwitcherProps) => {
    return (
        <div className="flex space-x-4 border-b">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={`pb-2 ${
                        active === tab.value
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-500'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabSwitcher;
