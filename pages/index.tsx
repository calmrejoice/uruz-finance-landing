import type { NextPage } from "next";
import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAos } from "@hooks/useAos";
import Lottie from "lottie-react";
import animation from "@assets/animation.json";

const Home: NextPage = () => {
  return (
    <Flex mx="36" flexDir="column">
      {/* CTA */}
      <Flex height="70vh" flexDir="row">
        <Flex flex={1} flexDir="column" justifyContent="center" height="100%">
          <Spacer />
          <Heading>Decentralized borrow and lending protocol on TRON</Heading>
          <Text mt="6">
            Simple and powerful community-driven finance for everyone.
          </Text>
          <Spacer />
          <HStack mt="9" spacing="9">
            <Button variant="outline">Launch App</Button>
            <Badge colorScheme="green">Earn</Badge>
            <Badge colorScheme="red">Borrow</Badge>
            <Badge colorScheme="yellow">Lend</Badge>
          </HStack>
        </Flex>

        {/* Animation */}
        <Flex flex={1} flexDir="column" justifyContent="center">
          <Lottie loop={true} animationData={animation} />
        </Flex>
      </Flex>

      {/* Cards */}
      <HStack>
        <Flex></Flex>
      </HStack>
    </Flex>
  );
};

export default Home;
