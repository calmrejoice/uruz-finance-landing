import { Flex, Icon, Spacer, Text } from "@chakra-ui/react";

export const FeatureCard = ({ title, icon, description }: any) => {
  return (
    <Flex
      borderRadius="lg"
      bgColor="gray.900"
      p="6"
      flexDir="column"
      width="100%"
    >
      <Icon as={icon} />
      <Spacer />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Flex>
  );
};
