import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
} from "@chakra-ui/react";

import styled from "styled-components";

import React from "react";

const Navbar = () => {
  const DisplayFlex = styled.div`
    display: flex;
    gap: 20px;
  `;

  const Flex= styled.div`
  display: flex;
  mindWidth: max-content;
  align-items : center;
  gap:2px;
  border: 1px solid grey;
  padding : 20px;
  
  `

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Logo</Heading>
        </Box>
        <DisplayFlex>
        <Popover placement='top-start'>
  <PopoverTrigger>
    <Button  style={{backgroundColor: "white"}}>Inspiration</Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Explore Design Work</PopoverHeader>
   
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
     Trending Design to Explore you
    </PopoverBody>
    <PopoverHeader fontWeight='semibold'>New & NoteWorthy</PopoverHeader>
    <PopoverBody>
   Up and upcoming Designers
    </PopoverBody>
  </PopoverContent>
</Popover>


<Popover placement='top-start'>
  <PopoverTrigger>
    <Button  style={{backgroundColor: "white"}}>Inspiration</Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Job Board</PopoverHeader>
   
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
     Find your dream design job
    </PopoverBody>
    <PopoverHeader fontWeight='semibold'>Freelance Projects</PopoverHeader>
    <PopoverBody>
An Exclusive list for contact Works
    </PopoverBody>
  </PopoverContent>
</Popover>
       
          <h3 >Learn Design</h3>
          <h3 >Hire Designers</h3>
        </DisplayFlex>
       

        <Spacer />

        <ButtonGroup gap="2">
          <Button  style={{backgroundColor: "white"}} >Log in</Button>
          <Button colorScheme="pink">Sign Up</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
