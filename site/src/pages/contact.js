import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import ContactForm from "../components/contactForm"

const Contact = () => {
  return (
    <Layout title="Contact">
      <Box minH="calc(100vh - 4rem)" bg="gray.800">
        <Container>
          <ContactForm
            minW={[
              "calc(375px - 2.5rem)",
              "calc(30em - 2.5rem)",
              "calc(48em - 2.5em)",
            ]}
            maxW="48em"
          />
        </Container>
      </Box>
    </Layout>
  )
}

export default Contact
