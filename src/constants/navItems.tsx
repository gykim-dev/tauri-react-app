import { Home, Layers, Settings, LucideIcon } from 'lucide-react';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  {
    to: '/',
    label: 'Home',
    icon: Home,
  },
  {
    to: '/example',
    label: 'Example',
    icon: Layers,
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: Settings,
  },
];
