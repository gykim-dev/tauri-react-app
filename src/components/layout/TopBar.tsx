import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TOPBAR_MENU } from '@/configs/menuConfig';
import { APP_CONFIG } from '@/configs/appConfig';
import { useTranslation } from 'react-i18next';

export const TopBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="h-full w-full flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="md:hidden w-8 h-8 flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={APP_CONFIG.logoImage}
            alt={APP_CONFIG.logoText}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="md:hidden text-sm font-bold tracking-tight text-foreground">
          {APP_CONFIG.name}
        </h1>
      </div>

      {/* Action */}
      <div className="flex items-center gap-2">
        {TOPBAR_MENU.map((item) => {
          const Icon = item.icon;

          const handleClick = () => {
            if (item.type === 'link') navigate(item.to);
            else item.onClick?.();
          };

          if (item.label === 'Profile') {
            return (
              <Button
                key={t(item.label)}
                variant="ghost"
                className="h-10 w-10 rounded-full p-0 overflow-hidden border border-transparent hover:border-primary/30 transition-all"
                onClick={handleClick}
              >
                <Avatar className="h-full w-full pointer-events-none">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            );
          }

          return (
            <Button
              key={t(item.label)}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full text-muted-foreground hover:text-primary transition-colors"
              onClick={handleClick}
            >
              <Icon className="h-5 w-5" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
