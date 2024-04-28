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
          gridTemplateRows={' 1fr '}
          gridTemplateColumns={'150px 1fr'}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={'header'} >
            <Header />
          </GridItem>
          <GridItem area={'nav'} border='2px' borderColor='gray.200'>
            <Nav />
          </GridItem>
          <GridItem area={'main'} border='2px' borderColor='gray.200'>
            <Main />
          </GridItem>
          <GridItem area={'footer'} border='2px' borderColor='gray.200'>
            Footer
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
