'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    className?: string;
    fullHeight?: boolean;
}

export const Reveal = ({ children, width = 'fit-content', delay = 0.25, className = "", fullHeight = false }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 }); // Trigger every time? No, once is better usually. But user said "scrolling fast".

    // If fast scrolling, we want delay to be minimal for items already in view.
    // We'll keep it simple: consume className.

    return (
        <div ref={ref} className={className} style={{ position: 'relative', width, height: fullHeight ? '100%' : 'auto', overflow: 'visible' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
                style={{ height: fullHeight ? '100%' : 'auto' }}
            >
                {children}
            </motion.div>
        </div>
    );
};
