import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";


const Layout = () => {
  const item = new Array(12).fill(0).map((a, i) => i + 1);
  console.log(item);

  return (
    <Box>
      <Heading>Layout</Heading>
      <SimpleGrid columns={{
        base:1,
        sm:2,
        md:3,
        lg:4,
        xl:5,
        "2xl":6
      }}>
        {item.map((abc) => (
          <Box key={abc}>{abc}</Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Layout;
