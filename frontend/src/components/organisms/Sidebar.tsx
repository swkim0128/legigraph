'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="w-64 h-full bg-gray-100 shadow-md px-4 py-6">
            <nav className="flex flex-col gap-3">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                    홈
                </Link>
                <Link
                    href="/laws"
                    className="text-gray-700 hover:text-blue-600"
                >
                    법안 목록
                </Link>
                <Link
                    href="/legislators"
                    className="text-gray-700 hover:text-blue-600"
                >
                    발의자
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
