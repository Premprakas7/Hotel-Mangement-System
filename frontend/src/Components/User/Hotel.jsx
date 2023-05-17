import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/action';
import HotelCard from './HotelCard';
import { Grid } from '@chakra-ui/react';

const Hotel = () => {

    const dispatch=useDispatch();
    const hotel=useSelector(state=>state.reducer.hotel);

    useEffect(()=>{
        if(hotel.length===0){
          dispatch(getData())
        }
    },[dispatch,hotel.length])
    console.log(hotel);
  return (
    
    <div>
      <Grid templateColumns={{base:"repeat(1,fr)", sm:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} gap="2rem">
      {hotel.map((item)=><HotelCard key={item.id} {...item}/>)}
      </Grid>
    </div>
    
  )
}

export default Hotel
