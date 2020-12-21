import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Flex, Grid, Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import AudioPlayer from "../components/audioPlayer"
import SanityImage from "../components/sanityImage"
import serializers from "../components/serializers"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      sanityDiscography {
        title
        projects {
          title
          _rawNotes
          artwork {
            asset {
              url
            }
          }
          artAlt
          media {
            asset {
              url
            }
          }
        }
      }
    }
  `)

  const { title, projects } = data.sanityDiscography

  return (
    <Layout title={title}>
      <Box w="100%" minH="calc(100vh - 4rem)" bg="gray.800">
        <Container>
          {projects.map((project, i) => {
            const { title, artwork, artAlt, media, _rawNotes } = project

            return (
              <div key={i}>
                <Grid
                  maxW="940px"
                  gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
                  gap={["1em", "1em", "3em", 0]}
                  pb={["6em", "6em", "5em", "8em"]}
                >
                  <Flex direction="column" pb={["1em", "1em", "1em", 0]}>
                    <Box pb="1.5em">
                      <SanityImage
                        src={artwork.asset.url}
                        width={400}
                        height={400}
                        alt={artAlt}
                      />
                    </Box>
                    {media?.asset?.url && (
                      <AudioPlayer src={media.asset.url.toString()} />
                    )}
                  </Flex>
                  <Flex direction="column">
                    <Heading color="purple.50" mb={[".5rem", "1rem"]}>
                      {title.toUpperCase()}
                    </Heading>
                    <Box color="purple.50">
                      <BlockContent
                        blocks={_rawNotes}
                        serializers={serializers}
                      />
                    </Box>
                  </Flex>
                </Grid>
              </div>
            )
          })}
        </Container>
      </Box>
    </Layout>
  )
}

export default Portfolio
