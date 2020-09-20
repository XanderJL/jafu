import React from "react"
import { Box, Flex, Link, Heading, Text, Icon } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"

import background from "../images/stack_background.jpg"

const IndexPage = () => (
  <Layout title="Home">
    <Box
      minH="calc(100vh - 4rem)"
      bg="gray.800"
      bgImage={`url("${background}")`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" minH="inherit">
        <Container>
          <Box maxW="90ch" mb="3em">
            <Heading color="purple.50" fontSize="5xl" mb="1.5rem">
              THIS IS A BIGASS HEADING
            </Heading>
            <Text color="purple.50" fontSize="xl">
              Some copy that can go here Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque eum est exercitationem eos sit libero
              asperiores iste molestiae non magni doloremque, repellat omnis
              nesciunt provident vel reiciendis! Sequi totam fugiat iste
              accusantium minima eveniet eius illum quas perferendis molestiae
              officia quo est vero consequuntur voluptas provident nulla
              tempore, eaque, doloremque incidunt soluta similique ipsum! Natus
              facere nostrum nobis saepe autem.
            </Text>
          </Box>
          <Box mb="5em">
            <Link mr="1.25em" href="https://www.facebook.com/JafuAudio/">
              <Icon name="facebook" color="purple.200" size="48px" />
            </Link>
            <Link mr="1.25em" href="https://twitter.com/JafuDub">
              <Icon name="twitter" color="purple.200" size="48px" />
            </Link>
            <Link
              mr="1.25em"
              href="https://open.spotify.com/artist/1SJSnoggDVPSbOqpIn2yAg?si=1kP7dbDDSEOX0xMARsC-Sg"
            >
              <Icon name="spotify" color="purple.200" size="48px" />
            </Link>
            <Link mr="1.25em" href="https://soundcloud.com/jafu">
              <Icon name="soundCloud" color="purple.200" size="48px" />
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
