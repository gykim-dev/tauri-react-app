import React from 'react';
import { cn } from '@/lib/utils';

interface PagePlaceholderProps {
  children?: React.ReactNode;
  className?: string; // Add optional className prop
}

export const PagePlaceholder = ({
  children,
  className,
}: PagePlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex-1 flex flex-col w-full min-h-full animate-in fade-in ',
        className,
      )}
    >
      {children}
    </div>
  );
};
