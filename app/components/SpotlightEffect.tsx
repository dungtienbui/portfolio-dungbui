// app/components/SpotlightEffect.tsx
"use client";

import { useEffect } from 'react';

export const SpotlightEffect = () => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Cập nhật biến CSS --mouse-x và --mouse-y
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null; // Không render gì cả
};