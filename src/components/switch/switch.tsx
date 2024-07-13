import { Flex, Switch as RadixSwitch, SwitchProps, Text } from '@radix-ui/themes';
import { FormLabel } from '../form';
import { forwardRef } from 'react';

export interface ISwitchProps extends SwitchProps {
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  description?: string;
}

export const Switch = forwardRef<HTMLButtonElement, ISwitchProps>(
  ({ error, description, label, size, required, containerClassName, labelClassName, ...props }, ref) => {
    return (
      <Flex asChild width="100%" direction="column" gap="1" className={containerClassName}>
        <label>
          <FormLabel className={labelClassName} label={label} size={size} required={required} />
          <RadixSwitch ref={ref} {...props} />
          {error && (
            <Text size="2" color="red">
              {error}
            </Text>
          )}
          {description && (
            <Text size="2" color="gray">
              {description}
            </Text>
          )}
        </label>
      </Flex>
    );
  },
);

Switch.displayName = 'Switch';
