import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface CardItem {
    id: number | string;
    image: string;
    category?: string;
    title: string;
    italicTitle?: string;
    description?: string;
}

interface Parallax3DCarouselProps {
    items: CardItem[];
    renderCard: (item: CardItem, isClone: boolean) => React.ReactNode;
    cardWidth?: number;
    gap?: number;
}

export function Parallax3DCarousel({
    items,
    renderCard,
    cardWidth = 400,
    gap = 30
}: Parallax3DCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // We need enough copies to fill the screen seamlessly.
    // Assuming 4 items, we copy them 3 times = 12 items.
    const displayItems = [...items, ...items, ...items, ...items];
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isHovered = useRef(false);

    useEffect(() => {
        if (!containerRef.current || !trackRef.current) return;

        const totalItems = displayItems.length;
        const totalWidth = totalItems * (cardWidth + gap);

        // We start in the middle of our infinite track
        let smoothPos = totalWidth / 2;
        let targetPos = totalWidth / 2;
        let autoScrollSpeed = 1.5;

        let ctx = gsap.context(() => {
            // Loop over cards
            const cards = itemsRef.current.filter(Boolean);

            const onDragStart = (e: MouseEvent | TouchEvent) => {
                // Simple drag logic
            };

            // Ticker
            const ticker = gsap.ticker.add(() => {
                if (!isHovered.current) {
                    targetPos += autoScrollSpeed;
                }

                smoothPos += (targetPos - smoothPos) * 0.1;

                // Wrap around seamlessly
                if (targetPos > totalWidth) {
                    smoothPos -= totalWidth;
                    targetPos -= totalWidth;
                } else if (targetPos < 0) {
                    smoothPos += totalWidth;
                    targetPos += totalWidth;
                }

                cards.forEach((card, i) => {
                    let rawX = (i * (cardWidth + gap)) - smoothPos;

                    // Warp card to other side if it goes off-screen
                    if (rawX < -cardWidth * 2) {
                        rawX += totalWidth;
                    } else if (rawX > totalWidth - cardWidth * 2) {
                        rawX -= totalWidth;
                    }

                    const centerX = window.innerWidth / 2;
                    const cardCenterX = rawX + (cardWidth / 2);
                    const dist = cardCenterX - centerX;

                    // normalized -1 to 1 based on screen width
                    const normalizedDist = Math.max(-1, Math.min(1, dist / (window.innerWidth / 1.5)));

                    const scale = 1 - Math.abs(normalizedDist) * 0.2;
                    const rotY = Math.max(-30, Math.min(30, normalizedDist * 35));
                    const zZ = Math.abs(normalizedDist) * -300;
                    const opacity = 1 - Math.abs(normalizedDist) * 0.4;

                    gsap.set(card, {
                        x: rawX,
                        y: '-50%',
                        scale: scale,
                        rotationY: rotY,
                        z: zZ,
                        opacity: opacity,
                        transformOrigin: '50% 50%'
                    });

                    // Inner parallax
                    const img = card?.querySelector('.parallax-bg') as HTMLElement;
                    if (img) {
                        gsap.set(img, { x: -normalizedDist * 60 });
                    }
                });
            });

            return () => {
                gsap.ticker.remove(ticker);
            };
        }, containerRef);

        return () => ctx.revert();
    }, [cardWidth, gap, displayItems.length]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] md:h-[700px] overflow-hidden group cursor-grab active:cursor-grabbing"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
        >
            <div
                ref={trackRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {displayItems.map((item, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { itemsRef.current[idx] = el; }}
                        className="absolute top-1/2 left-0 pointer-events-auto h-[450px] md:h-[550px]"
                        style={{
                            width: cardWidth,
                            marginTop: '-225px',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform'
                        }}
                    >
                        {renderCard(item, idx >= items.length)}
                    </div>
                ))}
            </div>
        </div>
    );
}
