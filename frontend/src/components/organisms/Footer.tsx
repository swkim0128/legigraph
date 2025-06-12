'use client';

import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-14 bg-gray-900 text-white flex items-center justify-center text-sm">
            © {new Date().getFullYear()} LegiGraph. All rights reserved.
        </footer>
    );
};

export default Footer;
