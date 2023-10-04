import { Box, Button, Flex, Heading, Input ,Spacer,Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { EditData, getData } from '../../Redux/app/action'
import { Link as RouteLink } from 'react-router-dom'

const AdminEdit = () => {
  const {id}=useParams()
  const data=useSelector(state=>state.app.data)
  const dispatch=useDispatch();
  const [category, setCategory]=useState()
  const [image, setImage]=useState()
  const [cost, setCost]=useState()
  const [status, setStatus]=useState()


  const UpadteHandler=()=>{
    dispatch(EditData(id,{
      category,
      image,
      cost,
      status
    })).then(()=>getData())
  }


  useEffect(()=>{
    if(!data){
      dispatch(getData())
    }
  },[dispatch,data])

  useEffect(()=>{
    if(data){
      const currentitems=data.find((item)=>item.id===Number(id));
      if(currentitems){
        setCategory(currentitems.category);
        setImage(currentitems.image);
        setCost(currentitems.cost);
        setStatus(currentitems.status)
      }
    }
  },[data,id])

  return (
    <div>
        <Heading>Edit Page</Heading>
        <Box  w="25rem" ml="35%" p="2rem"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}> 
          <Text  fontSize="xl"  fontWeight="600"> Category</Text>
          <Input type="text" placeholder='Category' value={category} onChange={(e)=>setCategory(e.target.value)} />

          <Text fontSize="xl" fontWeight="600">Image</Text>
          <Input type="url" placeholder='Image' value={image} onChange={(e)=>setImage(e.target.value)} />

          <Text fontSize="xl" fontWeight="600">Cost</Text>
          <Input type="text" placeholder='Cost' value={cost} onChange={(e)=>setCost(e.target.value)} />

          <Text fontSize="xl" fontWeight="600">Status</Text>
          <Input type="text" placeholder='Status' value={status} onChange={(e)=>setStatus(e.target.value)} />
          <Flex >
          <Button onClick={()=>UpadteHandler()}>Update</Button>
          <Spacer/>
          <RouteLink to="/admin"><Button>Cancel</Button></RouteLink>
          </Flex>
          
        </Box>   
        
   
    </div>
  )
}

export default AdminEdit
