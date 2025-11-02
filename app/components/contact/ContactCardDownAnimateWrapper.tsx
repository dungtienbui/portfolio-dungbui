'use client'

import { motion } from "motion/react"

export const ContactCardDownAnimateWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <motion.div
            variants={itemVariants}
        >
            {children}
        </motion.div>
    )
}