import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

const GridLayout = () => {
  const variant = useBreakpointValue({
    sm: "outline",
    md: "solid",
  });

  return (
    <Box>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
      >
        <GridItem color="white" rowSpan={2} colSpan={1} bg="rgb(0,114,187)">
          NAV
        </GridItem>
        <GridItem color="white" rowSpan={2} colSpan={2} bg="rgb(248,147,29)">
          CONTENT
        </GridItem>
        <GridItem color="white" rowSpan={2} colSpan={1} bg="rgb(238,28,37)">
          WIDGET
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
      >
        <GridItem
          color="white"
          rowSpan={2}
          colSpan={1}
          bg="rgb(0,114,187)"
        ></GridItem>
        <GridItem color="white" rowSpan={3} colSpan={1} bg="rgb(248,147,29)">
          CONTENT
        </GridItem>
        <GridItem color="white" rowSpan={1} colSpan={1} bg="rgb(238,28,37)">
          WIDGET
        </GridItem>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        <GridItem
          color="white"
          rowSpan={1}
          colSpan={1}
          bg="rgb(0,114,187)"
        ></GridItem>
        <GridItem
          color="white"
          rowSpan={1}
          colSpan={2}
          bg="rgb(248,147,29)"
        ></GridItem>
        <GridItem
          color="white"
          rowSpan={2}
          colSpan={3}
          bg="rgb(238,28,37)"
        ></GridItem>
        <GridItem
          color="white"
          rowSpan={3}
          colSpan={1}
          bg="rgb(0,114,187)"
        ></GridItem>
        <GridItem
          color="white"
          rowSpan={3}
          colSpan={1}
          bg="rgb(248,147,29)"
        ></GridItem>
        <GridItem
          color="white"
          rowSpan={3}
          colSpan={1}
          bg="rgb(238,28,37)"
        ></GridItem>
      </Grid>
    </Box>
  );
};

export default GridLayout;
