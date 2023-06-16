import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios"

export default function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const initial = {
    name: "",
    hospital: "",
    specialisation: "",
    salary: "",
  };

  const [info, setInfo] = useState(initial);
  const [item, setItem] = useState([{}]);

  const handleChange = (e) => {
    const { name, specialisation, salary, hospital } = e.target;

    setInfo({
      ...info,
      [name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    alert("hi");

    setItem(info);
    console.log(info)
   
  };
    useEffect(()=>{
       axios({
        url:"http://localhost:8080/posts",
        method: "POST",
        data:{
          name: item.name,
          specialisation: item.specialisation,
          salary:  item.salary,
          hospital: item.hospital
        }
       })
       .then((res)=>{
        console.log(res.data)
       })
    },[])


  //console.log(info)

  return (
    <>
      <Button onClick={onOpen}>Add Doctor</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Doctor Name</FormLabel>
              <Input
                name="name"
                value={info.name}
                onChange={handleChange}
                ref={initialRef}
                placeholder="ENTER NAME"
              />
            </FormControl>
            <FormControl>
              <FormLabel>SELECT HOSPITAL:</FormLabel>
              <Select
                placeholder="Select option"
                name="hospital"
                onChange={handleChange}
              >
                <option value="AIIMS">AIIMS</option>
                <option value="LVS">LVS</option>
                <option value="BANSAL">BANSAL</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>SPECIALISATION</FormLabel>
              <Select
                placeholder="Select option"
                name="specialisation"
                onChange={handleChange}
              >
                <option value="DENTIST">DENTIST</option>
                <option value="SURGEN">SURGEN</option>
                <option value="CARDIO">CARDIO</option>
                <option value="RADIOLOGIST">RADIOLOGIST</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salary</FormLabel>
              <Input
                placeholder="ENTER  SALARY"
                name="salary"
                value={info.salary}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
