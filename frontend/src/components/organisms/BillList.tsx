// BillList.tsx
'use client';
import React from 'react';
import Badge from '@/components/atoms/Badge';

export interface BillListItem {
    id: string;
    title: string;
    status: string;
    sponsor: string;
}

interface BillListProps {
    bills: BillListItem[];
}

const BillList = ({ bills }: BillListProps) => {
    return (
        <ul className="space-y-2">
            {bills.map((bill) => (
                <li
                    key={bill.id}
                    className="p-4 border rounded-xl shadow-sm hover:bg-gray-50"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">
                                {bill.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {bill.sponsor}
                            </p>
                        </div>
                        <Badge variant="info">{bill.status}</Badge>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BillList;
