import { Slot } from "@radix-ui/themes";

export const DrawerListIcon = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    // @ts-ignore
    <Slot width={24} height={24} {...props}>
      {children}
    </Slot>
  );
};
