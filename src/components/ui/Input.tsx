'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? React.useId();

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            'flex h-10 w-full rounded-md bg-surface-2 border border-border-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:border-primary focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-primary text-primary focus-visible:ring-primary/30 focus-visible:border-primary',
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <span className="text-xs text-primary">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
