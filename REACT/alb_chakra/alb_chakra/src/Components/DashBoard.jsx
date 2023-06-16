import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DashBoard = () => {
  return (
    <Box>
      <Flex
        display="flex"
        justifyContent="space-between"
        borderBottom="0.5px solid gray"
        padding="1rem"
        mb="5rem"
      >
        <Button
          bg="brand.700"
          bgColor="rgb(95,107,210)"
          color="white"
          fontSize="16px"
          padding="1rem"
          fontWeight="900"
        >
          4d
        </Button>
        <Spacer />

        <Box display="flex" gap="30px">
          <Button variant="ghost" textStyle="h3" color="none">
            Sign In{" "}
          </Button>
          <Button border="0.5px solid blue">Sign Up</Button>
          <Button color="white" bgColor="rgb(95,107,210)" bg="brand.900">
            Post a Job{" "}
            <span role="img" aria-label="Rocket">
              🚀
            </span>
          </Button>
        </Box>
      </Flex>

      <Box>
        <Text textStyle="h1" fontSize="6xl">
          Find The Right
        </Text>
        <HStack justifyContent="center">
          <Text textStyle="h1" fontSize="6xl" color="rgb(95,107,210)">
            Four-Day
          </Text>{" "}
          <Text textStyle="h1" fontSize="6xl">
            Week Job{" "}
          </Text>
        </HStack>
      </Box>

      <Flex gap="1rem" margin="auto" w="500px" mt="2rem" mb="1rem">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Type job title or keyword"
        />{" "}
        <Button>AddIcon</Button>{" "}
      </Flex>

      <Box display="flex" gap="1rem" justifyContent="center" mb="2rem">
        <Button bg="rgb(95,107,210)" color="white">
          Remote
        </Button>
        <Button bg="rgb(95,107,210)" color="white">
          Tech
        </Button>
        <Button bg="rgb(95,107,210)" color="white">
          Marketing
        </Button>
      </Box>

      {/* /// RECENT JOBS AND DIVS */}

      <Flex gap="1rem" w="500px" margin="auto">
        <Text
          color="rgb(95,107,210)"
          textStyle="h4"
          fontWeight="600"
          fontSize="5xl"
        >
          Recent
        </Text>
        <Text textStyle="h4" fontWeight="600" fontSize="5xl">
          Jobs
        </Text>
      </Flex>

      <Flex
        padding="1rem"
        justifyContent="space-between"
        width="500px"
        margin="auto"
        border="1px solid blue"
        borderRadius="5px"
        marginTop='2rem'
      >
        <Box >
          <Image
            width="3rem"
            src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
            alt="img"
          />
        </Box>

        <Flex direction='column' alignItems='flex-start' marginRight='4rem' >
          <Box>Talewind</Box>
          <Box><Text textStyle="h3" >Lead Producer</Text></Box>
          <Box><Text>$40k - $50k</Text></Box>
        </Flex>

        <Flex direction="column" justifyContent="space-between">
          <Flex gap="1rem">
            <Box>
              <Icon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  class="chakra-icon css-1k5b3z4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
                </svg>
              </Icon>
            </Box>
            <Box><Icon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  class="chakra-icon css-1k5b3z4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
                </svg>
              </Icon></Box>
            <Box><Icon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  class="chakra-icon css-1k5b3z4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
                </svg>
              </Icon></Box>
            <Box><Icon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  class="chakra-icon css-1k5b3z4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
                </svg>
              </Icon></Box>
          </Flex>
          <Box><Text >Full Time</Text></Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashBoard;
