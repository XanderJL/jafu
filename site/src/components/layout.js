import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "@chakra-ui/core"
import SEO from "../components/seo"
import Navbar from "./navbar"
import NavbarItem from "./navbarItem"
import Footer from "./footer"

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Flex direction="column" minH="calc(100vh - 4rem)" minW="100%">
        <Navbar>
          <NavbarItem href="/">HOME</NavbarItem>
          <NavbarItem href="/discography">DISCOGRAPHY</NavbarItem>
          <NavbarItem href="/photos">PHOTOS</NavbarItem>
          <NavbarItem href="/contact">CONTACT</NavbarItem>
        </Navbar>
        <Box flex={1}>{children}</Box>
        <Footer />
      </Flex>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
