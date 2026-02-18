import React, { useRef, useEffect, useState } from 'react';
import { cn } from './utils';

interface LetterRevealProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

export function LetterReveal({ text, className, delay = 0, stagger = 50 }: LetterRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <span ref={ref} className={cn("inline-block", className)} aria-label={text}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className={cn(
                        "inline-block transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] willow-effect",
                        isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-[100%] opacity-0 rotate-6"
                    )}
                    style={{ transitionDelay: `${delay + i * stagger}ms` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
}
