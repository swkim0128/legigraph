// ProcessTracker.tsx
'use client';
import React from 'react';

interface Step {
    label: string;
    completed: boolean;
}

interface ProcessTrackerProps {
    steps: Step[];
}

const ProcessTracker = ({ steps }: ProcessTrackerProps) => {
    return (
        <div className="flex gap-4 items-center">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`w-4 h-4 rounded-full ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                    ></div>
                    <span className="ml-2 text-sm">{step.label}</span>
                    {index !== steps.length - 1 && (
                        <div className="mx-2 w-4 h-px bg-gray-300" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProcessTracker;
