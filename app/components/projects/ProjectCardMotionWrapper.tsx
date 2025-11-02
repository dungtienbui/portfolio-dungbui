'use client';

import clsx from "clsx";
import { LegacyAnimationControls, motion, scale, TargetAndTransition, Transition, useInView, VariantLabels } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";


interface Props {
    children: React.ReactNode;
    initial?: boolean | TargetAndTransition | VariantLabels | undefined;
    inViewAnimate?: boolean | TargetAndTransition | VariantLabels | LegacyAnimationControls | undefined;
    outViewAnimate?: boolean | TargetAndTransition | VariantLabels | LegacyAnimationControls | undefined;
}

const DefaultAnimationData = {
    initial: { opacity: 1, x: -100 },
    inViewAnimate: { opacity: 1, scale: 1, x: 0 },
    outViewAnimate: { opacity: 0.7, scale: 0.9, x: 0 },
}

export const ProjectCardMotionWrapper = (({ children, initial, inViewAnimate, outViewAnimate }: Props) => {
    const contanerRef = useRef(null);

    const isInView = useInView(contanerRef, {
        once: false,
        amount: 0.3,
    })

    const d = useMemo(() => {
        return {
            i: initial ? initial : DefaultAnimationData.initial,
            iv: inViewAnimate ? inViewAnimate : DefaultAnimationData.inViewAnimate,
            ov: outViewAnimate ? outViewAnimate : DefaultAnimationData.outViewAnimate
        }
    }, [initial, inViewAnimate, outViewAnimate])

    const data = {
        initialData: d.i,
        animateData: isInView ? d.iv : d.ov,

    }

    return (
        <motion.div
            ref={contanerRef}
            initial={data.initialData}
            animate={data.animateData}
            whileHover={isInView ? {
                scale: 1.025,
                translateY: -15,
                transition: {
                    type: "spring"
                }
            } : {}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
});