import React from 'react'
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const Credit = () => {
 
   

  return (
    <div>
 

 <h1>Payment details</h1>
    <FormControl>
      
      <FormLabel>Credit Card Number</FormLabel>
      <Input placeholder="**** **** **** ****" />

      <FormLabel>Expiration Date</FormLabel>
      <Input placeholder="MM / YY" />

      <FormLabel>CVV</FormLabel>
      <Input placeholder="***" />
    </FormControl>








    </div>
  )
}

export default Credit