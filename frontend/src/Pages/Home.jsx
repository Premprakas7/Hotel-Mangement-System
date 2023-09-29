import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Heading paddingBottom="5rem">Hotel Mangement System</Heading>
      <Flex justifyContent="center">
        <ButtonGroup gap="3">
          <RouteLink to="/admin">
            <Button colorScheme="teal" size="lg">
              Admin
            </Button>
          </RouteLink>
          <RouteLink to="/auth">
            <Button colorScheme="teal" size="lg">
              auth
            </Button>
          </RouteLink>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Home;
