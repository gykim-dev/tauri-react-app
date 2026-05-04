import { NAV_MENU } from '@/configs/menuConfig';
import { NavButton } from '@/components/NavButton';
import { useTranslation } from 'react-i18next';

export const BottomBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full items-center justify-around px-2">
      {NAV_MENU.map((item) => (
        <NavButton
          key={item.to}
          to={item.to}
          icon={<item.icon />}
          label={t(item.label)}
          direction="vertical"
        />
      ))}
    </div>
  );
};
