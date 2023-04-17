import { Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr ,Button} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminTable = () => {
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/data").then((res)=>{setData(res.data)}).catch((err)=>console.log(err))
    },[])
    console.log(data)
  return (
    <div>
        <Heading>Admin Table</Heading>
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Number</Th>
                        <Th>Category</Th>
                        <Th>Cost</Th>
                        <Th>Max Capacity</Th>
                        <Th>Type Of Room</Th>
                        <Th>Type Of Bed</Th>
                        <Th>Status</Th>
                        <Th>Images</Th>
                        <Th>Delete items</Th>
                        <Th>Changes in Rooms</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((e)=>
                        <Tr key={e.id}>
                            <Td>{e.id}</Td>
                            <Td>{e.category}</Td>
                            <Td>{e.cost}</Td>
                            <Td>{e.capacity} Adults</Td>
                            <Td>{e.type_room}</Td>
                            <Td>{e.type_bed}</Td>
                            <Td>{e.status}</Td>
                            <Td><Image boxSize="12rem" h="10rem" src={e.image}/></Td>
                            <Td><Button>Delete</Button></Td>
                            <Td><Button>Update</Button></Td>


                        </Tr>

                    )}
                </Tbody>
            </Table>
        </TableContainer>

      
    </div>
  )
}

export default AdminTable
