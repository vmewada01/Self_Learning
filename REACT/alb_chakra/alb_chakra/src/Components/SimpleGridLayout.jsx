import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const SimpleGridLayout = () => {
  return (
    <Box>
      <Text>SimpleGridLayout</Text>

      <SimpleGrid columns={[3, null, 3]} spacing="0px">
        <Box bg="tomato" height="200px">
          NAV
        </Box>
        <Box bg="blue" height="200px">
          CONTENT
        </Box>
        <Box bg="yellow" height="200px">
          WIDGET
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid columns={[2]} spacing="0px">
        <Box bg="tomato" height="200px">
          NAV
        </Box>
        <Box bg="blue" height="400px">
          CONTENT
        </Box>
        <Box bg="yellow" height="200px">
          WIDGET
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
        <Box bg="blue" height="80px"></Box>
        <Box bg="red" height="80px"></Box>
        <Box bg="tomato" width="900px" height="80px"></Box>
        <br />
        <Box display="flex" gap="2px">
        <Box bg="orange" height="80px"></Box>
        <Box bg="purple" height="80px"></Box>
        <Box bg="green" height="80px"></Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SimpleGridLayout;
