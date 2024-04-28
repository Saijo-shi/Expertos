import { UnorderedList, ListItem, Box } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box>
      <UnorderedList>
        <ListItem>База данных</ListItem>
        <ListItem>Импорт</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Nav;
