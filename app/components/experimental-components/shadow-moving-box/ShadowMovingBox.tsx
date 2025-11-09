'use client'

// Các import giữ nguyên
import { useRef, useEffect } from "react";
import styles from "./styles.module.css";

export default function ShadowMovingBox() {

    // 1. Thêm type cho useRef
    // Chúng ta báo cho TypeScript biết ref này sẽ trỏ tới một <div />
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        // Check null vẫn quan trọng
        if (!container) return;

        // 2. Thêm type cho 'e' (event)
        // Sự kiện 'pointerover' sẽ có type là PointerEvent
        const handlePointerOver = (e: PointerEvent) => {

            // 3. Cần ép kiểu e.target sang Element
            // vì e.target mặc định là EventTarget, không có hàm .closest()
            const card = (e.target as Element).closest(`.${styles.card}`);

            // Từ đây, 'card' có type là 'Element | null'
            if (card) {
                // Bên trong 'if', 'card' chắc chắn là 'Element'
                const rect = card.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const x = rect.left - containerRect.left;
                const y = rect.top - containerRect.top;

                container.style.setProperty('--shadow-width', `${rect.width}px`);
                container.style.setProperty('--shadow-height', `${rect.height}px`);
                container.style.setProperty('--shadow-x', `${x}px`);
                container.style.setProperty('--shadow-y', `${y}px`);
                container.style.setProperty('--shadow-opacity', '1');
            }
        };

        // Hàm này không dùng event nên không cần type
        const handlePointerLeave = () => {
            container.style.setProperty('--shadow-opacity', '0');
        };

        // Các event listener này vẫn hoạt động bình thường
        container.addEventListener('pointerover', handlePointerOver);
        container.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            container.removeEventListener('pointerover', handlePointerOver);
            container.removeEventListener('pointerleave', handlePointerLeave);
        };

    }, []); // Mảng rỗng đảm bảo effect chỉ chạy 1 lần

    return (
        <div ref={containerRef} className={styles.cardContainer}>
            <div className={styles.card}>
                <h3>Card 1</h3>
                <p>Nội dung...</p>
            </div>
            <div className={styles.card}>
                <h3>Card 2</h3>
                <p>Nội dung...</p>
            </div>
            <div className={styles.card}>
                <h3>Card 3</h3>
                <p>Nội dung...</p>
            </div>
        </div>
    )
}