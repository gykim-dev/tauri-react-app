import { NavButton } from '../NavButton';
import { NAV_ITEMS } from '@/constants/navItems';

export const BottomBar = () => {
  return (
    <div className="flex h-full items-center justify-around px-2">
      {NAV_ITEMS.map((item) => (
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
