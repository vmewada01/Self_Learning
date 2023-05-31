import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Stacks = () => {
  const text = useBreakpointValue({
    sm: "SMALL",
    md: "MEDIUM",
    ld: "LARGE",
    xl: "XTRA LARGE",
  });

  return (
    <Box>
      <Flex gap="2rem" padding="1rem" marginBottom="1rem">
        <Heading>My App</Heading>
        <Spacer />

        <Button>Login</Button>
        <Button>SignUp</Button>
      </Flex>

      <Stack
        sx={{ border: "1px solid black" }}
        direction={{ base: "column", md: "row" }}
        spacing="2rem"
      >
        <Button>{text}</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Stack>
      <br />
      <br />
      <br />

      <Flex
        sx={{ border: "1px solid black" }}
        direction={{ base: "column", md: "row" }}
        gap="2rem"
      >
        <Button>{text}</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Flex>
      <br />
      <br />
      <br />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <br />
      <br />
      <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
    </Box>
  );
};

export default Stacks;
