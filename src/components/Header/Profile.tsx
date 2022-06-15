import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;

}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Herik Oliveira</Text>
          <Text
            color="gray.300"
            fontSize="small">herikoliveira@ymail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Herik Oliveira" src="https://avatars.githubusercontent.com/u/55418492?s=96&v=4" />
    </Flex>
  );
}