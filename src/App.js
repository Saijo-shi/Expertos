import React from 'react';
import { ChakraProvider, Box, Grid, theme, GridItem } from '@chakra-ui/react';

import Main from './Main';
import Header from './Header';
import Nav from './Nav';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={'header'}>
            <Header />
          </GridItem>
          <GridItem area={'nav'}>
            <Nav />
          </GridItem>
          <GridItem area={'main'}>
            <Main />
          </GridItem>
          <GridItem area={'footer'}>Footer</GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
