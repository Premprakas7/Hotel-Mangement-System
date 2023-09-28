import {
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
import { deleteItem, getData } from "../../Redux/app/action";

const AdminTable = () => {
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.reducer.hotel);
  useEffect(() => {
    if (hotel.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, hotel.length]);

  const handleDelete = (id) => {
    let newData = hotel.filter((item) => item.id !== id);
    dispatch(deleteItem(id, newData)).then(() => dispatch(getData()));
  };
  console.log(hotel);
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
            {hotel.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.category}</Td>
                <Td>{e.cost}</Td>
                <Td>{e.capacity} Adults</Td>
                <Td>{e.room}</Td>
                <Td>{e.type_bed}</Td>
                <Td>{e.status}</Td>
                <Td>
                  <Image boxSize="12rem" h="10rem" src={e.image} />
                </Td>
                <Td>
                  <Button onClick={() => handleDelete(e.id)}>Delete</Button>
                </Td>
                <Td>
                  <RouteLink to={`/admin/edit/${e.id}`}>
                    <Button>Update</Button>
                  </RouteLink>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTable;
