import { Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

import { SocialIcon } from "./SocialIcon";
import { UruzLogo } from "./UruzLogo";

export const Header = () => {
  return (
    <Flex flexDir="row" my="12" mx="36">
      <UruzLogo />
      <Spacer />
      <HStack mr="6" spacing="6">
        <SocialIcon icon={SiGitbook} aria="documents" />
        <SocialIcon icon={FaGithub} aria="github" />
        <SocialIcon icon={FaDiscord} aria="discord" />
        <SocialIcon icon={FaTelegram} aria="telegram" />
      </HStack>
      <Button as="a" href="https://app.uruz.finance" target="_blank">
        Launch App
      </Button>
    </Flex>
  );
};
