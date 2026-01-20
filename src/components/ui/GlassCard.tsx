import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, onClick, hoverEffect = false }: GlassCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "glass-card p-6 border border-white/10 bg-black/40 backdrop-blur-xl text-white",
                hoverEffect && "cursor-pointer hover:bg-white/5 active:scale-95",
                className
            )}
        >
            {children}
        </div>
    );
}
