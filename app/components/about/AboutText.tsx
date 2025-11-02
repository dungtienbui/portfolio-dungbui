'use client'

import clsx from "clsx";
// Imports: Thay thế 'motion/react' bằng 'motion' và 'react'
import { inView, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const AboutText = () => {
    // 1. Sử dụng hook useAnimate
    const [scope, animate] = useAnimate();

    // 2. Thiết lập animation bằng useEffect
    useEffect(() => {
        // 3. Đặt trạng thái ban đầu (tương đương 'hidden')
        // Chạy ngay lập tức với duration: 0
        animate(
            "p",
            { opacity: 0, y: 50 },
            { duration: 0 }
        );

        // 4. Sử dụng inView để thay thế whileInView
        const stop = inView(
            scope.current,
            // (a) Callback khi đi vào View (tương đương 'visible')
            () => {
                animate(
                    "p", // Nhắm mục tiêu tất cả <p> trong 'scope'
                    { opacity: 1, y: 0 },
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
                        "p",
                        { opacity: 0, y: 50 },
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
        // 7. Gắn 'scope' ref vào container
        <div
            ref={scope}
            className={clsx(
                "space-y-4 text-gray-700 dark:text-gray-300",
            )}
        >
            {/* 8. Đây là các thẻ <p> thông thường, không cần 'motion.p' */}
            <p>
                Tôi là <strong>Bùi Tiến Dũng</strong>, sinh viên năm cuối ngành <strong>Khoa học Máy tính</strong> tại <strong>Trường đại học Bách Khoa HCM</strong> (dự kiến tốt nghiệp T11/2025).
                Tôi tốt nghiệp với điểm số <strong>GPA 3.3/4 - Loại Giỏi</strong> và có chứng chỉ tiếng Anh <strong>TOEIC 790 R&L</strong>.
            </p>
            <p>
                Tôi luôn có tinh thần <strong>chăm chỉ, có trách nhiệm cao</strong> và <strong>khao khát học hỏi</strong>.
            </p>
            <p>
                Mục tiêu của tôi là trở thành một <strong>Web Developer</strong>, tập trung chuyên sâu vào <strong>Frontend</strong>. Khởi đầu, tôi bắt đầu với việc phát triển Web với các công nghệ <b>HTML, CSS, JS, PHP</b>. Sau này, tôi dần chuyển sang sử dụng các <b>Framework</b> hiện đại để có thể phát triển Web nhanh chóng như <b>React, Next.js</b>. Tôi cũng có kinh nghiệm làm việc với backend <b>(Node.js/Express, Java/Java spring boot)</b> và nhiều loại cơ sở dữ liệu <b>(MySQL, PostgreSQL, MongoDB, Neo4j)</b>. Điều này giúp tôi có cái nhìn toàn diện về một hệ thống <b>Fullstack</b>.
            </p>
            <p
                className="text-gray-900 dark:text-white">
                Hiện tôi đang tích cực tìm kiếm cơ hội <strong>Intern/Fresher</strong> để áp dụng kiến thức, đóng góp vào các dự án thực tế, và cũng như học hỏi kinh nghiệm từ đây.
            </p>
        </div>
    )
}