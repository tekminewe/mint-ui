import { TextProps } from '@radix-ui/themes';
import { Text } from '../text';
import { forwardRef } from 'react';

export interface IFormLabelProps {
  label?: string;
  size?: TextProps['size'];
  required?: boolean;
  className?: string;
  htmlFor?: string;
}

export const FormLabel = forwardRef<HTMLSpanElement, IFormLabelProps>(
  ({ size = '2', label, required, className, htmlFor }, ref) => {
    return (
      <Text mb="1" ref={ref} weight="medium" size={size} as="label" htmlFor={htmlFor} className={className}>
        {label}
        {required && (
          <Text as="span" color="red">
            {' *'}
          </Text>
        )}
      </Text>
    );
  },
);

FormLabel.displayName = 'FormLabel';
