import React from "react"
import { Box, Link, Icon } from "@chakra-ui/core"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import Container from "../components/container"

import { graphql, useStaticQuery } from "gatsby"
import serializers from "../components/serializers"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      sanityLandingPage {
        title
        background {
          asset {
            fixed(width: 1920) {
              ...GatsbySanityImageFixed
            }
          }
        }
        _rawBody
      }
    }
  `)

  const { title, background, _rawBody } = data.sanityLandingPage

  return (
    <Layout title={title}>
      <Box
        minH="calc(100vh - 4rem)"
        bg="gray.800"
        bgImage={`url("${background.asset.fixed.src}")`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box bg="rgba(0, 0, 0, 0.5)" minH="inherit">
          <Container>
            <Box color="purple.50" maxW="90ch" mb="3em">
              <BlockContent blocks={_rawBody} serializers={serializers} />
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
}

export default IndexPage
