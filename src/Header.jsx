import { Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
const Header = () => {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Эксперты</Heading>
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
