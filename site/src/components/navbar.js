import React from "react"
import PropTypes from "prop-types"
import { Flex } from "@chakra-ui/core"
import Container from "./container"

const Navbar = ({ children }) => {
  return (
    <Flex bg="gray.900" minH="4rem" align="center">
      <Container p={["0 1.25rem", "0 3rem"]}>
        <Flex>{children}</Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
