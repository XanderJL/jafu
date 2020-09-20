import React from "react"
import { Flex, Text, Link } from "@chakra-ui/core"
import Container from "./container"

const Footer = () => {
  return (
    <Flex bg="gray.900">
      <Container>
        <Text color="purple.200">
          <Link href="mailto:jafuproductions@gmail.com">
            jafuproductions@gmail.com
          </Link>
        </Text>
      </Container>
    </Flex>
  )
}

export default Footer
