import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Details = () => {
    const dispatch=useDispatch();
    const details=useSelector(state=>state.reducer.hotel);
    useEffect(()=>{

    },[dispatch])
  return (
    <div>
      
    </div>
  )
}

export default Details
