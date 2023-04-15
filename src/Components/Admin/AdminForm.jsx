import React, { useState } from 'react'
import {FormControl,FormLabel,Input,Flex,Button,Heading, Select} from "@chakra-ui/react";
import axios from 'axios';

const AdminForm = () => {
    const [data,setData]=useState({
        category:"",
        image:"",
        cost:"",
        capacity:"",
        type_room:"",
        type_bed:"",
        status:""
    });
    const handleChange = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData)
      };

      const AddProducts=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/data",{
            category:data.category,
            image:data.image,
            cost:data.cost,
            capacity:data.capacity,
            type_room:data.type_room,
            type_bed:data.type_bed,
            status:data.status
        }).then((res)=>console.log(res.d))
      }

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
            <form onSubmit={(e)=>AddProducts(e)}>
          <FormLabel>Room Category</FormLabel>
            <Select placeholder='Select Option' id="category" value={data.category}
           onChange={(e) => handleChange(e)} >
                <option value="family">Family</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
            </Select>

          <FormLabel>Room Images</FormLabel>
          <Input
            type="url"
            placeholder="Image Link"
            id="image"
            value={data.image}
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
            <Select placeholder='Select Option' id="type_room" value={data.type_room}
           onChange={(e) => handleChange(e)}>
                <option value="AC">AC</option>
                <option value="Non AC">Non AC</option>
            </Select>

            <FormLabel>Type of Bed</FormLabel>
            <Select placeholder='Select Option' id="type_bed" value={data.type_bed}
           onChange={(e) => handleChange(e)}>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
            </Select>
  
            <FormLabel>Status Of Room</FormLabel>
            <Select placeholder='Select Option' id="status" value={data.image}
           onChange={(e) => handleChange(e)}>
                <option value="Booked">Booked</option>
                <option value="Available">Available</option>
            </Select>
          <Button
            mt="15px"
            width="full"
            type="submit"
            colorScheme="blue"
             onClick={(e)=>AddProducts(e)}
          >
            ADD ROOMS
          </Button>
          </form>
        </FormControl>
      </Flex>
      
    </div>
  )
}

export default AdminForm
