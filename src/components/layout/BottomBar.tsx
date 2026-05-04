import { NAV_MENU } from '@/configs/menuConfig';
import { NavButton } from '@/components/NavButton';

export const BottomBar = () => {
  return (
    <div className="flex h-full items-center justify-around px-2">
      {NAV_MENU.map((item) => (
        <NavButton
          key={item.to}
          to={item.to}
          icon={<item.icon />}
          label={item.label}
          direction="vertical"
        />
      ))}
    </div>
  );
};
