import { Card, Flex, Text } from '@radix-ui/themes';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export const ErrorCard = ({ title, message }: { title: string; message: string }) => {
  return (
    <Card className="max-w-xl w-full mt-24 mx-2 md:mx-0 md:p-8">
      <Flex direction="column" align="center" justify="center" p="4" className="space-y-4">
        <CrossCircledIcon width={120} height={120} color="red" />
        <Text size="8" ml="2">
          {title}
        </Text>
        <Text align="center">{message}</Text>
      </Flex>
    </Card>
  );
};
