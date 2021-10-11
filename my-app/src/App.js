import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Heading,
  Spacer,
  Grid,
  theme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { ClientServerGraph } from './ClientServerGraph';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <HStack>
            <VStack justifySelf="flex-center" spacing={0}>
              <Spacer />
              <Heading>
                Distribution Time for Client-Server and P2P Architectures
              </Heading>
              <Text>Samuel Carlos CS356 Section 003 </Text>
            </VStack>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
          <VStack spacing={8}>
            <ClientServerGraph></ClientServerGraph>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
