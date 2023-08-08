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
import { DeleteData, ReadData, UpdateData, createData } from "../Redux/action";
  import {useDispatch, useSelector} from 'react-redux'
 import axios from "axios"

  export default function Todo() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editItem, setEditItem] = useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [items, setItems] = useState(null)
   // const items= useSelector((store)=> store.reducer.data)
    const [save_edit, setSave_edit] = useState("")
    const [input_Data, setInput_Data] = useState({
      firstname: "",
      lastname: "",
      jobDescription: "",
      contact: "",
    });
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
 
   console.log(items)
    const handleSaveFunction = () => {
      dispatch(createData(input_Data))
      setEditItem(false);
      // setData([...data, input_Data]);
     // console.log(data);
  
      onClose();
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
  
    //console.log(editItem);
    const handleEdit = (id) => {
      setEditItem(true);
  
      onOpen();
      setSave_edit(id)
    window.location.reload()
     
    };
    const handleDelete = (id) => {
      console.log(id)
     dispatch(DeleteData(id))
    };
    const handleEditSave = () => {
      dispatch(UpdateData(save_edit,input_Data))
      setEditItem(false);
  
       onClose();
      //console.log(data);
      window.location.reload()
    };
 function findData(){
  axios.get("http://localhost:8000/todo").then((res)=> {
  console.log(res.data.user)
  setItems(res.data.user)
 })
 }

 
  useEffect(()=> {
    findData()
  },[dispatch])
  
  // console.log(items)
  
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
              {editItem ? (
                <Button onClick={handleEditSave} colorScheme="blue" mr={3}>
                  Edit
                </Button>
              ) : (
                <Button onClick={handleSaveFunction} colorScheme="blue" mr={3}>
                  Save
                </Button>
              )}
  
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        {items &&
          items.map((item, index) => {
            return (
              <Box
                key={index}
                style={{
                  display: "flex",
                  margin: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box>{item.firstname}</Box>
                <Box>{item.jobDescription}</Box>
                <Box>{item.contact}</Box>
                <Button onClick={() => handleEdit(item._id)}>Edit</Button>
                <Button onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
              </Box>
            );
          })}
      </>
    );
  }
  