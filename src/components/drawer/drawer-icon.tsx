import { Slot } from "@radix-ui/themes";

export const DrawerListIcon = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Slot width={24} height={24} {...props}>
      {children}
    </Slot>
  );
};
