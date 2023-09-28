import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const AdminForm = () => {
  const [values, setValues] = useState({
    name: "",
    category: "",
    image: "",
    cost: "",
    capacity: "",
    room: "",
    bed: "",
    status: "",
  });
  const handleChange = (e) => {
    const newData = { ...values };
    newData[e.target.id] = e.target.value;
    setValues(newData);
  };

  const AddProducts = (e) => {
    e.preventDefault();
    axios
      .post("https://hotel-m.onrender.com/data", {
        name: values.name,
        category: values.category,
        image: values.image,
        cost: values.cost,
        capacity: values.capacity,
        room: values.room,
        bed: values.bed,
        status: values.status,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.values));
  };

  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="120vh"
        flexDirection={"column"}
      >
        <Heading m={"1rem"}>ADD PRODUCTS</Heading>
        <FormControl
          width="30%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"2rem"}
        >
          <FormLabel>Hotel Name</FormLabel>
          <Input
            type="text"
            placeholder="name"
            id="name"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Room Category</FormLabel>
          <Select
            placeholder="Select Option"
            id="category"
            value={values.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="Family">Family</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </Select>

          <FormLabel>Room Images</FormLabel>
          <Input
            type="url"
            placeholder="Image Link"
            id="image"
            value={values.image}
            onChange={(e) => handleChange(e)}
          />

          <FormLabel>Cost</FormLabel>
          <Input
            type="text"
            placeholder="Cost"
            id="cost"
            value={values.cost}
            onChange={(e) => handleChange(e)}
          />

          <FormLabel>Capacity</FormLabel>
          <Input
            type="text"
            placeholder="Maximum Capacity"
            id="capacity"
            value={values.capacity}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Type of Room</FormLabel>
          <Select
            placeholder="Select Option"
            id="room"
            value={values.room}
            onChange={(e) => handleChange(e)}
          >
            <option value="AC">AC</option>
            <option value="Non AC">Non AC</option>
          </Select>

          <FormLabel>Type of Bed</FormLabel>
          <Select
            placeholder="Select Option"
            id="bed"
            value={values.bed}
            onChange={(e) => handleChange(e)}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </Select>

          <FormLabel>Status Of Room</FormLabel>
          <Select
            placeholder="Select Option"
            id="status"
            value={values.status}
            onChange={(e) => handleChange(e)}
          >
            <option value="Booked">Booked</option>
            <option value="Available">Available</option>
          </Select>
          <Button
            mt="15px"
            width="full"
            type="submit"
            colorScheme="blue"
            onClick={(e) => AddProducts(e)}
          >
            ADD ROOMS
          </Button>
        </FormControl>
      </Flex>
    </div>
  );
};

export default AdminForm;
