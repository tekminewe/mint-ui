import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Callout as RadixCallout } from "@radix-ui/themes";

interface ICalloutProps extends Omit<RadixCallout.RootProps, "color"> {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
}

export const Callout = ({
  children,
  type = "info",
  ...props
}: ICalloutProps) => {
  const renderIcon = () => {
    switch (type) {
      case "info":
        return <InfoCircledIcon />;
      case "warning":
        return <ExclamationTriangleIcon />;
      case "error":
        return <CrossCircledIcon />;
      case "success":
        return <CheckCircledIcon />;
      default:
        return <InfoCircledIcon />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "warning":
        return "yellow";
      case "error":
        return "red";
      case "success":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <RadixCallout.Root {...props} color={getColor()}>
      <RadixCallout.Icon>{renderIcon()}</RadixCallout.Icon>
      <RadixCallout.Text>{children}</RadixCallout.Text>
    </RadixCallout.Root>
  );
};
