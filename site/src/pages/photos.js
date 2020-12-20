import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPortfolio {
        title
      }
    }
  `)
  const { title } = data.sanityPortfolio

  return (
    <Layout title={title}>
      <Box w="100%" minH="calc(100vh - 4rem)" bg="gray.800">
        <Container></Container>
      </Box>
    </Layout>
  )
}

export default Portfolio
