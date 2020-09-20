import React from "react"
import { Link } from "gatsby"
import { Flex } from "@chakra-ui/core"

const NavbarItem = ({ href, children }) => {
  return (
    <Link to={href}>
      <Flex p="1rem 0" mr="1.75rem" color="purple.50" fontWeight="bold">
        {children}
      </Flex>
    </Link>
  )
}

export default NavbarItem
