'use client'

import clsx from "clsx";
import { inView, motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react";

export const SkillMotionWrapper = (
    {
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }
) => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        // 3. Đặt trạng thái ban đầu (tương đương 'hidden')
        // Chạy ngay lập tức với duration: 0
        animate(
            ".motion-stagged-item",
            { opacity: 0, x: 50 },
            { duration: 0 }
        );

        // 4. Sử dụng inView để thay thế whileInView
        const stop = inView(
            scope.current,
            // (a) Callback khi đi vào View (tương đương 'visible')
            () => {
                animate(
                    ".motion-stagged-item", // Nhắm mục tiêu tất cả <p> trong 'scope'
                    { opacity: 1, x: 0 },
                    {
                        duration: 0.5,
                        // 5. Sử dụng stagger utility
                        delay: stagger(0.2)
                    }
                );

                // (b) Return một callback để reset khi ra khỏi View
                // (Đây là cách triển khai 'once: false')
                return () => {
                    animate(
                        ".motion-stagged-item",
                        { opacity: 0, x: 50 },
                        { duration: 0.3 }
                    );
                };
            },
            // 6. Tùy chọn tương đương viewport={{ amount: 0.3 }}
            { amount: 0.3 }
        );

        // Cleanup khi component unmount
        return () => stop();

    }, [animate, scope]); // Thêm dependencies cho hook

    return (
        <div
            ref={scope}
            className={clsx(
                className
            )}
        >
            {children}
        </div>
    )
}