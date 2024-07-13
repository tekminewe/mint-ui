import { HTMLAttributes } from 'react';
import { cn } from '../../utils';

export interface IDrawerListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  selected?: boolean;
}

export const DrawerListItem = ({ children, selected, className, ...props }: IDrawerListItemProps) => {
  return (
    <li
      className={cn(className, 'flex opacity-60 items-center p-2 rounded gap-2 font-medium cursor-pointer', {
        'bg-white/5 opacity-100': selected,
      })}
      {...props}
    >
      {children}
    </li>
  );
};
