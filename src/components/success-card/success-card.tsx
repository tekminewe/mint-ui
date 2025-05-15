import { Card, Text } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export const SuccessCard = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <Card className="max-w-xl w-full mt-24 mx-2 md:mx-0 md:p-8">
      <div className="flex flex-col items-center justify-center p-4 space-y-4">
        <CheckCircledIcon width={120} height={120} color="green" />
        <Text size="8" ml="2">
          {title}
        </Text>
        <Text align="center">{message}</Text>
      </div>
    </Card>
  );
};
