import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest',
  {
    variants: {
      status: {
        'new-drop': 'bg-white text-black',
        limited: 'border border-primary text-primary glow-red-sm',
        'sold-out': 'bg-surface-3 text-text-muted',
        restock: 'border border-border-hover text-text-secondary',
        exclusive: 'bg-gradient-to-r from-amber-400 to-yellow-200 text-black',
      },
    },
    defaultVariants: {
      status: 'new-drop',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, status, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ status }), className)} {...props} />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };