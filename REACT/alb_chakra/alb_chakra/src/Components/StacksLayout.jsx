import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useBreakpointValue } from "@chakra-ui/react";

const StacksLayout = () => {
    const variant = useBreakpointValue({
        sm: "column",
        md: "row",
      });

  return (
    <Box>
   <Text>Stacks</Text>
      <Stack direction={variant}>
        <Box width='200px' height='200px' bg='red'>Nav</Box>
        <Box width='400px' height='200px' bg='blue'>Content</Box>
        <Box width='200px'height='200px' bg='purple'>Widget</Box>
      </Stack>
      <br />
      <br />
      <br />
      <Stack direction={variant} space='2'>
        <Box display="Stack" StackDirection="column" space='10px'>
        <Box width='200px' height='400px' bg='red'>Nav</Box>
        <Box width='200px' height='200px' bg='blue'>Content</Box>
        </Box>
        
      <Box><Box width='200px'height='610px' bg='purple'>Widget</Box></Box>  
      </Stack>

      <br />
      <br />
      <br />
      <Stack  space='2' direction='column'>
        <Box display="flex"   justifyContent="space-between" width="600px">
        <Box width='280px' height='200px' bg='red'>Nav</Box>
        <Box width='280px' height='200px' bg='blue'>Content</Box>
        </Box>
       <Box width='620px' height='200px' bg='blue'></Box>
        
      <Box display="flex" flexDirection="row" gap='10px'>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        <Box width='200px'height='300px' bg='purple'>Widget</Box>
        </Box>  
      </Stack>

    </Box>
  )
}

export default StacksLayout