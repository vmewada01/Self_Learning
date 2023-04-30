
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PaymentCard = () => {
  return (
    <div className='payment'>
<Card>
  <CardHeader>
    <Heading size='md'>Payment details</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          CARHOLDER NAME
        </Heading>
        <Text pt='2' fontSize='sm'>
        <i class="fa-solid fa-user"></i>
        <input type="text" className='input' />
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          CARD NO
        </Heading>
        <Text pt='2' fontSize='sm'>
        <i class="fa-regular fa-credit-card"></i>
        <input type="text" className='input' />
        </Text>
      </Box>
      <Box>
        <div className='flex'>
          <div>
         <h3>Expiry Month</h3>
         <i class="fa-solid fa-calendar-days"></i>
         <input type="number" />
        <hr></hr>
          </div>
          <div>
          <h3>Expiry Year</h3>
          <i class="fa-solid fa-calendar-days"></i>
         <input type="number" />
         <hr></hr>
          </div>
          <div>
          <h3>CVC</h3>
          <i class="fa-solid fa-lock"></i>
         <input type="number" />
         <hr></hr>
          </div>

        </div>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase' className='lastheading'>
          <div className='abc'>
            <h2>Payment amount : _ </h2>
            <h2 className='color'>12 300 P</h2>
          </div>
        </Heading>
        
      </Box>
      <Box>
        <div className='button'>
        <button className='btn'>Pay</button>
        </div>

        
      </Box>

  
    </Stack>
  </CardBody>
</Card>



    </div>
  )
}

export default PaymentCard