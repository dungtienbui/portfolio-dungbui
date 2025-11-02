'use client'

import clsx from "clsx"
import { motion, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const AboutImage = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: false,
        amount: 0.3,
        initial: true
    })

    return (
        <div
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* Bạn có thể thêm ảnh của mình ở đây */}
                < div className={
                    clsx(
                        "w-full h-80 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-lg",
                        "transition delay-150 duration-300 ease-in-out hover:shadow-sky-300 hover:scale-110",
                    )
                } >
                    {/* <Image src="/path-to-your-image.jpg" alt="Bui Tien Dung" layout="fill" objectFit="cover" className="rounded-lg" /> */}
                    < p className="text-center p-4" > [Ảnh chân dung] </p>
                </div >
            </motion.div>
        </div>
    )
}