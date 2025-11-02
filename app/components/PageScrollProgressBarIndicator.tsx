'use client'

import clsx from "clsx"
import { useState, useEffect } from "react" // 1. Import thêm useState

export const PageScrollProgressBarIndicator = () => {

    // 2. Tạo state để lưu % cuộn
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {

        // 3. Tạo hàm xử lý để tính toán
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Tính toán tổng chiều cao có thể cuộn
            const totalScrollableHeight = scrollHeight - clientHeight;

            // Tránh chia cho 0 nếu không có thanh cuộn
            if (totalScrollableHeight <= 0) {
                setScrollProgress(0);
                return;
            }

            const scrollPercent = (scrollTop / totalScrollableHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        // 4. Gọi hàm handleScroll khi component mount (để lấy vị trí ban đầu)
        handleScroll();

        // 5. Thêm listener
        window.addEventListener("scroll", handleScroll);

        // 6. Dọn dẹp listener khi component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []); // Chỉ chạy 1 lần lúc mount

    return (
        <div className="w-full relative">
            <div className={clsx(
                // 7. Thêm các class style
                "h-1 bg-sky-700 dark:bg-sky-100",
                // Thêm hiệu ứng chuyển động mượt cho thanh bar
                // "transition-all duration-100 ease-out"
            )}
                // 8. Dùng style để set chiều rộng động
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}