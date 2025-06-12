import React from 'react';
import Spinner from '@/components/atoms/Spinner';

interface SpinnerOverlayProps {
    visible: boolean;
}

const SpinnerOverlay = ({ visible }: SpinnerOverlayProps) => {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
            <Spinner />
        </div>
    );
};

export default SpinnerOverlay;
