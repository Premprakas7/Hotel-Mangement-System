import React, { useState } from "react";
import { FormControl,FormLabel, Input,Flex,Button,Heading,Select} from "@chakra-ui/react";
import axios from "axios";

const AdminForm = () => {
  const [data, setData] = useState({
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
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const AddProducts = (e) => {
    e.preventDefault();
    axios.post("https://hotel-kp84.onrender.com/users", {
        name: data.name,
        category: data.category,
        img:data.img,
        cost: data.cost,
        capacity: data.capacity,
        room: data.room,
        bed: data.bed,
        status: data.status,
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
            value={data.name}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Room Category</FormLabel>
          <Select
            placeholder="Select Option"
            id="category"
            value={data.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="Family">Family</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </Select>

          <FormLabel>Room Images</FormLabel>
          <Input
            type="text"
            placeholder="Image Link"
            id="img"
            value={data.img}
            onChange={(e) => handleChange(e)}
          />

          <FormLabel>Cost</FormLabel>
          <Input
            type="text"
            placeholder="Cost"
            id="cost"
            value={data.cost}
            onChange={(e) => handleChange(e)}
          />

          <FormLabel>Capacity</FormLabel>
          <Input
            type="text"
            placeholder="Maximum Capacity"
            id="capacity"
            value={data.capacity}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Type of Room</FormLabel>
          <Select
            placeholder="Select Option"
            id="room"
            value={data.room}
            onChange={(e) => handleChange(e)}
          >
            <option value="AC">AC</option>
            <option value="Non AC">Non AC</option>
          </Select>

          <FormLabel>Type of Bed</FormLabel>
          <Select
            placeholder="Select Option"
            id="bed"
            value={data.bed}
            onChange={(e) => handleChange(e)}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </Select>

          <FormLabel>Status Of Room</FormLabel>
          <Select
            placeholder="Select Option"
            id="status"
            value={data.status}
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
