import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavButton } from '../NavButton';
import { cn } from '@/lib/utils';
import { NAV_MENU } from '@/configs/menuConfig';
import { APP_CONFIG } from '@/configs/appConfig';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SideBar = ({ isCollapsed, onToggle }: SideBarProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full py-4">
      {/* Toggle & Logo Section */}
      <div
        className={cn(
          'flex mb-6 transition-all duration-300',
          isCollapsed
            ? 'justify-center px-2'
            : 'flex-row items-center px-4 gap-3',
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {!isCollapsed && (
          <div className="flex items-center overflow-hidden animate-in fade-in duration-300">
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <img
                src={APP_CONFIG.logoImage}
                alt={APP_CONFIG.logoText}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="ml-3 font-bold text-lg tracking-tight truncate text-foreground">
              {APP_CONFIG.name}
            </span>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-2 space-y-1">
        {NAV_MENU.map((item) => (
          <NavButton
            key={item.to}
            to={item.to}
            icon={<item.icon />}
            label={isCollapsed ? '' : t(item.label)}
            direction="horizontal"
            className={cn(isCollapsed && 'justify-center px-0')}
          />
        ))}
      </nav>
    </div>
  );
};
