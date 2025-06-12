// LegislatorProfile.tsx
'use client';
import React from 'react';
import Avatar from '@/components/atoms/Avatar';

interface LegislatorProfileProps {
    name: string;
    party: string;
    region: string;
    image: string;
}

const LegislatorProfile = ({
    name,
    party,
    region,
    image,
}: LegislatorProfileProps) => {
    return (
        <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-sm">
            <Avatar src={image} alt={name} />
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">
                    {party} · {region}
                </p>
            </div>
        </div>
    );
};

export default LegislatorProfile;
