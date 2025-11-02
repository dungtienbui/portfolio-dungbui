'use client'

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { LegacyAnimationControls, motion, TargetAndTransition, Transition, VariantLabels } from 'motion/react';


interface AnimateOnMountProps {
    children: React.ReactNode;
    options?: {
        initial?: boolean | TargetAndTransition | VariantLabels | undefined;
        animate?: boolean | TargetAndTransition | VariantLabels | LegacyAnimationControls | undefined;
        transition?: Transition<any> | undefined
    };
    className?: string;
}

const DefaultOption = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
}

export const AnimateOnMountDiv = forwardRef<HTMLDivElement, AnimateOnMountProps>(
    ({ children, options, className }, ref) => {

        return (
            <motion.div
                ref={ref}
                initial={options?.initial ?? DefaultOption.initial}
                animate={options?.animate ?? DefaultOption.animate}
                transition={options?.transition ?? DefaultOption.transition}
                className={clsx(
                    className
                )}
            >
                {children}
            </motion.div>
        );
    }
);