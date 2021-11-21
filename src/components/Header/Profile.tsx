import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo de Campos</Text>
          <Text color="gray.300" fontSize="small">
            gustavocamposantunes@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Campos"
        src="https://github.com/gusdecante.png"
      />
    </Flex>
  );
}
