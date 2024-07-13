import { Text as RadixText, TextProps } from '@radix-ui/themes';
import { cn } from '../../utils';

type ISmallTextProps = Omit<TextProps, 'size' | 'as'>;

export const SmallText = ({ className, ...props }: ISmallTextProps) => (
  <RadixText size="2" {...props} className={cn('text-neutral-500', className)} />
);
