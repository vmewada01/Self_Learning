import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";



const FlexLayout = () => {
  const variant = useBreakpointValue({
    sm: "column",
    md: "row",
  });
  return (
    <Box>
      <Text>Flex</Text>
      <Flex direction={variant}>
        <Box width='200px' height='200px' bg='red'>Nav</Box>
        <Box width='400px' height='200px' bg='blue'>Content</Box>
        <Box width='200px'height='200px' bg='purple'>Widget</Box>
      </Flex>
      <br />
      <br />
      <br />
      <Flex direction={variant} gap='2'>
        <Box display="flex" flexDirection="column" gap='10px'>
        <Box width='200px' height='400px' bg='red'>Nav</Box>
        <Box width='200px' height='200px' bg='blue'>Content</Box>
        </Box>
        
      <Box><Box width='200px'height='610px' bg='purple'>Widget</Box></Box>  
      </Flex>

      <br />
      <br />
      <br />
      <Flex  gap='2' direction='column'>
        <Box display="flex" flexDirection="row"  justifyContent="space-between" width="600px">
        <Box width='280px' height='200px' bg='red'>Nav</Box>
        <Box width='280px' height='200px' bg='blue'>Content</Box>
        </Box>
       <Box width='620px' height='200px' bg='blue'></Box>
        
      <Box display="flex" flexDirection="row" gap='10px'>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        </Box>  
      </Flex>
    </Box>
  );
};

export default FlexLayout;
