import { NavMenuItem, TopbarMenuItem } from '@/types/menuItem';
import { Bell, Home, Layers, Settings, User } from 'lucide-react';

export const PATHS = {
  HOME: '/',
  EXAMPLE: '/example',
  SETTINGS: '/settings',
  PROFILE: '/profile',
} as const;

export const NAV_MENU: NavMenuItem[] = [
  { type: 'link', to: PATHS.HOME, label: 'Home', icon: Home },
  { type: 'link', to: PATHS.EXAMPLE, label: 'Example', icon: Layers },
  { type: 'link', to: PATHS.SETTINGS, label: 'Settings', icon: Settings },
];

export const TOPBAR_MENU: TopbarMenuItem[] = [
  {
    type: 'action',
    label: 'Notifications',
    icon: Bell,
    onClick: () => alert('Open Notifications Drawer'),
  },
  {
    type: 'link',
    label: 'Profile',
    icon: User,
    to: PATHS.PROFILE,
  },
];
