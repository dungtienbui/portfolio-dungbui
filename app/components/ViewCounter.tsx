// components/ViewCounter.tsx
'use client';

import { getAndUpdateViewCount } from '@/lib/actions/viewActions';
import React, { useState, useEffect } from 'react';

export default function ViewCounter() {
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                // 1. Gọi Server Action trực tiếp
                const data = await getAndUpdateViewCount();

                // 2. Cập nhật State
                setViewCount(data.count);
            } catch (err: any) {
                console.error("Lỗi khi gọi Server Action:", err);
                setViewCount(0); // Hiển thị 0 nếu có lỗi
            } finally {
                setIsLoading(false);
            }
        };

        fetchViews();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Đang tải số liệu...</p>
            ) : (
                <p>
                    Đã có {viewCount !== null ? viewCount.toLocaleString() : 0} lượt truy cập.
                </p>
            )}
        </div>
    );
}