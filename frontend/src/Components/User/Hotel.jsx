import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/action';

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
      
    </div>
  )
}

export default Hotel
