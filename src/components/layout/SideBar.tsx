import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavButton } from '../NavButton';
import { cn } from '@/lib/utils';
import { NAV_MENU } from '@/configs/menuConfig';
import { APP_CONFIG } from '@/configs/appConfig';

interface SideBarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SideBar = ({ isCollapsed, onToggle }: SideBarProps) => {
  return (
    <div className="flex flex-col h-full py-4">
      {/* Logo Section */}
      <div
        className={cn(
          'flex items-center px-4 mb-8',
          isCollapsed ? 'justify-center' : 'justify-start',
        )}
      >
        <div className="w-10 h-10 flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={APP_CONFIG.logoImage}
            alt={APP_CONFIG.logoText}
            className="w-full h-full object-contain"
          />
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-bold text-lg tracking-tight truncate text-foreground">
            {APP_CONFIG.name}
          </span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-2 space-y-1">
        {NAV_MENU.map((item) => (
          <NavButton
            key={item.to}
            to={item.to}
            icon={<item.icon />}
            label={isCollapsed ? '' : item.label} // 축소 시 라벨 비움
            direction="horizontal"
            className={cn(isCollapsed && 'justify-center px-0')}
          />
        ))}
      </nav>

      {/* Bottom Toggle Button */}
      <div className="px-2 mt-auto border-t border-border/40 pt-4">
        <Button
          variant="ghost"
          className={cn(
            'w-full text-muted-foreground hover:text-foreground',
            isCollapsed ? 'justify-center px-0' : 'justify-start px-4',
          )}
          onClick={onToggle}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
