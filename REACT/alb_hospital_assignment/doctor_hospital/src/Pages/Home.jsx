import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import Hospital from "../Modals/Hospital"
import Doctor from "../Modals/Doctor"
import { useNavigate } from 'react-router-dom'
import Doc from './Doc'

const Home = () => {


  return (
    <Box>
        <Box>Home Page</Box>
        <Doctor />
        <Hospital />
        <br />
        <br />
        
        <Doc />
    </Box>
  )
}

export default Home