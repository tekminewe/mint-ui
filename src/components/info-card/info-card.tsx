import { Card, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const InfoCard = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <Card className="max-w-xl w-full mt-24 mx-2 md:mx-0 md:p-8">
      <div className="flex flex-col items-center justify-center p-4 space-y-4">
        <InfoCircledIcon width={120} height={120} color="blue" />
        <Text size="8" ml="2">
          {title}
        </Text>
        <Text align="center">{message}</Text>
      </div>
    </Card>
  );
};
