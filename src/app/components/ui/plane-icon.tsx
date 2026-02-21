"use client";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";

export interface PlaneIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface PlaneIconProps {
    size?: number;
    className?: string;
    isAnimated?: boolean;
}

const PlaneIcon = forwardRef<PlaneIconHandle, PlaneIconProps>(
    ({ size = 24, className, isAnimated = false }, ref) => {
        const controls = useAnimation();

        const startAnimation = useCallback(() => {
            controls.start({
                x: [0, 4, -4, 0],
                y: [0, -4, 2, 0],
                rotate: [0, -8, 5, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
            });
        }, [controls]);

        const stopAnimation = useCallback(() => {
            controls.stop();
            controls.set({ x: 0, y: 0, rotate: 0 });
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
                    animate={isAnimated ? { x: [0, 3, -3, 0], y: [0, -3, 1, 0], rotate: [0, -6, 4, 0] } : controls}
                >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4H4c-2 0-2 2 0 3.5L7 11 3.8 19.2c-.28.6.08 1.28.72 1.28.26 0 .52-.1.72-.3L9 16h6l3.76 4.1c.2.2.46.3.72.3.64 0 1-.68.72-1.28z" />
                </motion.svg>
            </div>
        );
    }
);

PlaneIcon.displayName = "PlaneIcon";
export { PlaneIcon };
