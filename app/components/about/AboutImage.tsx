'use client'

import clsx from "clsx"
import { motion, useAnimate, useInView } from "motion/react";
import Image from "next/image";
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
                <Image
                    src="/me.JPG" width={472} height={709} alt={"My avatar image."}
                    className={clsx(
                        "aspect-2/3 max-h-80 w-auto",
                        "bg-gray-300 dark:bg-gray-700 rounded-lg shadow-lg",
                        "transition delay-150 duration-300 ease-in-out hover:shadow-sky-300 hover:scale-110",
                    )
                    }
                />
            </motion.div>
        </div>
    )
}