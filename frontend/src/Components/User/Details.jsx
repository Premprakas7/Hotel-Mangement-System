import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box,Container,Stack,Text,Image,Flex,Button,Heading,SimpleGrid,StackDivider,useColorModeValue,List,ListItem,} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getData } from "../../Redux/app/action";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState({});
  const detail = useSelector((state) => state.app.hotel);

  useEffect(() => {
    if (detail.length === 0) {
      dispatch(getData());
    }
  }, [detail.length, dispatch]);

  useEffect(() => {
    if (id) {
      const current = detail.find((hotel) => hotel._id ===(id));
      current && setCurrent(current);
    }
  }, [id, detail]);
  

  return (
    <div>
      <Header />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={current.img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {current.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ₹{current.cost}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Category:
                    </Text>{" "}
                    {current.category}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Type of Room:
                    </Text>{" "}
                    {current.room}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Type of Bed:
                    </Text>{" "}
                    {current.bed}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Max Person:
                    </Text>{" "}
                    {current.capacity}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Status:
                    </Text>{" "}
                    {current.status}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Book Hotels
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Details;
