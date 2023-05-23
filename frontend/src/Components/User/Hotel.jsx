import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, sortData } from '../../Redux/action';
import HotelCard from './HotelCard';
import { Grid, Input, Select,Flex } from '@chakra-ui/react';

const Hotel = () => {
    const dispatch=useDispatch();
    const hotel=useSelector(state=>state.reducer.hotel);

    useEffect(()=>{
        if(hotel.length===0){
          dispatch(getData())
        }
    },[dispatch,hotel.length])
    console.log(hotel);

    const handleSort=(e)=>{
      let value=e.target.value;
      let sortBy=[...hotel];
      if(value==="asc"){
        sortBy.sort((a,b)=>{return b.cost-a.cost})
      }
      if(value==="desc"){
        sortBy.sort((a,b)=>{return a.cost-b.cost})
      }
      dispatch(sortData(sortBy))
      console.log(sortData);
    }

    const filterName=(e)=>{
      let value=e.target.value;
    }
  return (
    <div>
      <Flex gap="1rem">
      <Select onClick={handleSort} placeholder='Cost Sort'>
        <option value="asc">High to Low</option>
        <option value="desc">Low to High</option>
      </Select>
      <Input placeholder='Filter by Hotel Name' onInput={filterName}/>
      </Flex>


      
      <Grid templateColumns={{base:"repeat(1,fr)", sm:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} gap="2rem">
      {hotel.map((item)=><HotelCard key={item.id} {...item}/>)}
      </Grid>
    </div>
    
  )
}

export default Hotel
