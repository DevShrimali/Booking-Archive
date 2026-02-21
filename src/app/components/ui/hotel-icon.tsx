"use client";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";

export interface HotelIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface HotelIconProps {
    size?: number;
    className?: string;
    isAnimated?: boolean;
}

const HotelIcon = forwardRef<HotelIconHandle, HotelIconProps>(
    ({ size = 24, className, isAnimated = false }, ref) => {
        const controls = useAnimation();

        const startAnimation = useCallback(() => {
            controls.start({
                scaleY: [1, 1.06, 1],
                y: [0, -2, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
            });
        }, [controls]);

        const stopAnimation = useCallback(() => {
            controls.stop();
            controls.set({ scaleY: 1, y: 0 });
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
                    animate={isAnimated ? { scaleY: [1, 1.06, 1], y: [0, -2, 0] } : controls}
                    transition={isAnimated ? { duration: 0.5, ease: "easeInOut" } : undefined}
                >
                    <path d="M10 22v-6.57" />
                    <path d="M12 11h.01" />
                    <path d="M12 7h.01" />
                    <path d="M14 15.43V22" />
                    <path d="M15 22v-4" />
                    <path d="M4 22V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17" />
                    <path d="M4 22h16" />
                    <path d="M8 22v-4" />
                    <path d="M9 15.43V22" />
                    <path d="M7 11h.01" />
                    <path d="M7 7h.01" />
                    <path d="M17 11h.01" />
                    <path d="M17 7h.01" />
                </motion.svg>
            </div>
        );
    }
);

HotelIcon.displayName = "HotelIcon";
export { HotelIcon };
