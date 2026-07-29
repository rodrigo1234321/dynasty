import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeletonVariants = cva(
  'bg-gradient-to-r from-surface-2 via-surface-3 to-surface-2 bg-[length:200%_100%] animate-shimmer',
  {
    variants: {
      variant: {
        text: 'h-4 w-full rounded',
        heading: 'h-8 w-3/4 rounded',
        card: 'aspect-[3/4] w-full rounded',
        image: 'aspect-square w-full rounded',
        circle: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'text',
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  );
}

Skeleton.Text = function SkeletonText(props: Omit<SkeletonProps, 'variant'>) {
  return <Skeleton variant="text" {...props} />;
};

Skeleton.Heading = function SkeletonHeading(props: Omit<SkeletonProps, 'variant'>) {
  return <Skeleton variant="heading" {...props} />;
};

Skeleton.Card = function SkeletonCard(props: Omit<SkeletonProps, 'variant'>) {
  return <Skeleton variant="card" {...props} />;
};

Skeleton.Image = function SkeletonImage(props: Omit<SkeletonProps, 'variant'>) {
  return <Skeleton variant="image" {...props} />;
};

Skeleton.Circle = function SkeletonCircle(props: Omit<SkeletonProps, 'variant'>) {
  return <Skeleton variant="circle" {...props} />;
};

export { Skeleton };