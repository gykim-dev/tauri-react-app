import { LucideIcon } from 'lucide-react';

interface BaseItem {
  label: string;
  icon: LucideIcon;
}

export interface LinkItem extends BaseItem {
  type: 'link';
  to: string;
}

interface ActionItem extends BaseItem {
  type: 'action';
  onClick: () => void;
}

export type NavMenuItem = LinkItem;
export type TopbarMenuItem = LinkItem | ActionItem;
