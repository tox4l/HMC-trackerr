import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'success' | 'warning'
    size?: 'default' | 'sm' | 'lg' | 'icon'
  }
>(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20',
    destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-500/20',
    outline: 'border border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20',
    warning: 'bg-amber-500 text-black hover:bg-amber-600 shadow-md shadow-amber-500/20'
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3 text-sm',
    lg: 'h-12 rounded-full px-8 text-base',
    icon: 'h-10 w-10 rounded-full'
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Button.displayName = "Button"

export { Button }