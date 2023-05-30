import {
  Box,
  Button,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PinInput,
  PinInputField,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";


import React, { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");


 

  return (
    <Box maxW='xs' margin="auto">
      <Heading> Form</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input type='name' name="name" placeholder="enter name" />
        </Box>
        <Box>
          <Input type='password' password="name" placeholder="enter password" />
        </Box>
        <Box>
          <PinInput value={otp} onChange={(value) => setOtp(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Box>

        <Box>
          <Text>{otp}</Text>
        </Box>

        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Menu>
  <MenuButton as={Button} >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
 
     <Box>
     <Button bgColor="brand.900">Sign Up</Button>
     </Box>


      </Stack>
    </Box>
  );
};

export default Form;
