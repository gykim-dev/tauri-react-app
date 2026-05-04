import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavButtonProps extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode;
  label: string;
  to: string;
  direction?: 'horizontal' | 'vertical';
}

export const NavButton = ({
  icon,
  label,
  to,
  direction = 'horizontal',
  className,
  ...props
}: NavButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isVertical = direction === 'vertical';

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        'relative transition-all duration-200 cursor-pointer rounded-none',
        'text-muted-foreground hover:text-foreground hover:bg-transparent',
        isVertical
          ? 'flex flex-1 h-full flex-col items-center justify-center gap-1 py-1'
          : 'w-full justify-start px-4 h-12 rounded-lg mb-1',
        isActive &&
          (isVertical
            ? 'text-primary bg-transparent'
            : 'bg-primary/10 text-primary font-semibold hover:bg-primary/15'),
        className,
      )}
      {...props}
    >
      <Link to={to}>
        <span
          className={cn(
            'transition-transform [&>svg]:h-6 [&>svg]:w-6',
            isVertical ? '' : 'mr-3',
            isActive && isVertical && 'scale-110',
          )}
        >
          {icon}
        </span>
        <span
          className={cn(
            isVertical ? 'text-[10px] font-medium' : 'text-sm',
            isActive ? 'opacity-100' : 'opacity-80',
            !label && !isVertical && 'hidden',
          )}
        >
          {label}
        </span>

        {isVertical && isActive && (
          <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary animate-in fade-in zoom-in duration-300" />
        )}
      </Link>
    </Button>
  );
};
