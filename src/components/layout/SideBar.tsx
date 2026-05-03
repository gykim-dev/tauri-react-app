import { NavButton } from '@/components/NavButton';
import { NAV_ITEMS } from '@/constants/navItems';

export const SideBar = () => {
  return (
    <div className="flex flex-col w-full p-4 gap-2">
      <div className="mb-6 px-4 py-2">
        <span className="text-xl font-bold text-primary tracking-tight">
          Starter App
        </span>
      </div>

      <div className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.to}
            to={item.to}
            icon={<item.icon />}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};
