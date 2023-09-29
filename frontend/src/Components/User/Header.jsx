import { Button, Flex, Spacer, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Flex bg="teal" h="4rem" alignItems="center" maxW={"full"}>
        <RouteLink to="/auth">
          <Heading fontStyle="italic" color="white">
            Maleen Hotel
          </Heading>
        </RouteLink>
        <Spacer />
        <RouteLink to="/signup">
          <Button>SignUp</Button>
        </RouteLink>
        <RouteLink to="/login">
          <Button ml=".5rem">Login</Button>
        </RouteLink>
      </Flex>
    </div>
  );
};

export default Header;
