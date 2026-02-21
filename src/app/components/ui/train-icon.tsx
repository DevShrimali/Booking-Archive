"use client";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";

export interface TrainIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface TrainIconProps {
    size?: number;
    className?: string;
    isAnimated?: boolean;
}

const TrainIcon = forwardRef<TrainIconHandle, TrainIconProps>(
    ({ size = 24, className, isAnimated = false }, ref) => {
        const controls = useAnimation();

        const startAnimation = useCallback(() => {
            controls.start({
                x: [0, -5, 5, -3, 3, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
            });
        }, [controls]);

        const stopAnimation = useCallback(() => {
            controls.stop();
            controls.set({ x: 0 });
        }, [controls]);

        useImperativeHandle(ref, () => ({ startAnimation, stopAnimation }));

        return (
            <div
                className={cn("cursor-pointer select-none", className)}
                onMouseEnter={startAnimation}
                onMouseLeave={stopAnimation}
                style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={isAnimated ? { x: [-4, 4, -4, 4, 0] } : controls}
                    transition={isAnimated ? { duration: 0.5, ease: "easeInOut" } : undefined}
                >
                    <rect x="4" y="3" width="16" height="13" rx="2" />
                    <path d="M4 9h16" />
                    <path d="M8 3v6" />
                    <path d="M16 3v6" />
                    <path d="m9 21 3-3 3 3" />
                    <path d="m8 21 8 0" />
                </motion.svg>
            </div>
        );
    }
);

TrainIcon.displayName = "TrainIcon";
export { TrainIcon };
