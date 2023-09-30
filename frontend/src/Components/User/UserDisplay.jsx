import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Hotel from "./Hotel";

const UserDisplay = () => {
  return (
    <div>
      <Header />
      <Flex>
        <Box w="18%">Filter</Box>
        <Flex w="81%">
          <Hotel />
        </Flex>
      </Flex>
    </div>
  );
};

export default UserDisplay;
