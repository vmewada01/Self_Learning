import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'


const DashBoard = () => {
  return (
    <Box>

      <Box display="flex" justifyContent="space-between" border="1px solid black" padding='1rem'>

      <Box bg="brand.700" bgColor="blue" color="white" textStyle="h3" padding="1rem">4d</Box>

      <Box display="flex" gap="30px">
      <Box  textStyle="h3" color="none" >Sign In </Box>
      <Button  border="0.5px solid blue" >Sign Up</Button>
      <Button bg="brand.900">Post a Job</Button>
      </Box>

      </Box>

       <Box>
       <Text textStyle="h1" fontSize='6xl'>Find The Right</Text>
       <Text textStyle="h2" fontSize='6xl'color="blue"> Four-Day </Text> <label color="blue"> <Text fontSize='6xl'>Week Job </Text></label>
       </Box>

       <Box width="35%" margin="auto"><Input type="text" placeholder='Type job title or keyword' /> <Button>AddIcon</Button> </Box>
      
      <Box display="flex" gap="1rem" justifyContent="center">
        <Button bg="blue" color="white">Remote</Button>
        <Button bg="blue" color="white">Tech</Button>
        <Button bg="blue" color="white">Marketing</Button>
        </Box>


    </Box>
  )
}

export default DashBoard