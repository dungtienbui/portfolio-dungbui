'use client'

import { motion } from "motion/react"

export const ContactDownAnimateWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
            transition={{ duration: 1, delay: 0.2 }}
        >
            {children}
        </motion.div>
    )
}