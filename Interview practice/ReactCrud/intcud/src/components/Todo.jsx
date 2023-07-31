import {
  Box,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalFooter,
  Modal,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editItem, setEditItem] = useState(false)
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [items, setItems] = useState(null)

  const [input_Data, setInput_Data] = useState({
    firstname: "",
    lastname: "",
    jobDescription: "",
    contact: "",
  });
  const [data, setData] = useState([]);

  const handleSaveFunction = () => {
     setEditItem(false)
    setData([...data, input_Data]);
    console.log(data)
    
    onClose()
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setInput_Data({
        ...input_Data,
      [name]: target.value,
    });
  
    // console.log(input_Data)
  };


console.log(editItem)
  const handleEdit=(item)=>{
    setEditItem(true)

    onOpen()
   

  }
  const handleDelete =(item)=>{
     const newData = items.filter((abc)=> abc.firstname !== item)
     setData(newData)
    // setData(newData)
    
  }


  useEffect(()=>{
    localStorage.setItem("react-crud",JSON.stringify(data))
   let  localStoragedata  = JSON.parse(localStorage.getItem("react-crud"))
     setItems(localStoragedata)
  },[data])

  return (
    <>
      <Box>Crud operations</Box>
      <Button onClick={onOpen}>Add Task</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstname"
                onChange={handleChange}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastname"
                onChange={handleChange}
                placeholder="Last name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Job Description </FormLabel>
              <Input
                name="jobDescription"
                onChange={handleChange}
                placeholder="job description "
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contact Details</FormLabel>
              <Input
                name="contact"
                onChange={handleChange}
                type="number"
                placeholder="contact details"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {editItem ? (<Button colorScheme="blue" mr={3}>Edit</Button>):( <Button onClick={handleSaveFunction} colorScheme="blue" mr={3}>
              Save
            </Button>) }
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      {items && items.map((item,index)=> {
        return <Box key={index} style={{display:"flex" ,margin:"1rem" ,justifyContent:"space-between"}}>
                 <Box>{item.firstname}</Box>
                 <Box>{item.jobDescription}</Box>
                 <Box>{item.contact}</Box>
                 <Button onClick={()=>handleEdit(item.firstname)}>Edit</Button>
                 <Button onClick={()=>handleDelete(item.firstname)}>Delete</Button>
        </Box>
      })}



    </>
  );
}
