import { DrawerListIcon } from './drawer-icon';
import { DrawerListItem } from './drawer-list-item';

interface IDrawerListProps {
  children: React.ReactNode;
}

export const DrawerList = ({ children }: IDrawerListProps) => {
  return <ul className="p-4 radix space-y-2">{children}</ul>;
};

DrawerList.Item = DrawerListItem;
DrawerList.Icon = DrawerListIcon;
