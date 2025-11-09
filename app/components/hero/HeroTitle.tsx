'use client'

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimateOnMountDiv } from "../animate/AnimateOnMountDiv";

export const HeroTitle = () => {
    const [value, setValue] = useState(0);

    const ref = useRef<HTMLHeadingElement>(null);

    const handleScroll = useCallback(() => {
        if (ref.current) {
            const ele = ref.current;
            const eleCurrTop = ele.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;
            const boundary = windowHeight / 4;

            if (eleCurrTop >= 0) {
                const v = Math.max(boundary - eleCurrTop, 0) / boundary * 100;
                setValue(v);
            } else {
                setValue(100);
            }
        }
    }, [ref]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);


    return (
        <AnimateOnMountDiv
            options={
                {
                    initial: { opacity: 0, y: -50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                }
            }
            ref={ref}
            className={clsx(
                "text-4xl md:text-6xl font-bold mb-4 text-nowrap",
                "flex flex-col md:flex-row gap-3",
            )}
        >
            <div>Chào bạn, tôi là</div>
            <div
                className={clsx(
                    "text-blue-600 dark:text-blue-400",
                    "transition-all duration-100 ease-out"
                )}
                style={{
                    transform: `translateY(-${value}%)`,
                    opacity: (100 - value) / 100
                }}
            >
                Bùi Tiến Dũng
            </div>
        </AnimateOnMountDiv>
    )
}