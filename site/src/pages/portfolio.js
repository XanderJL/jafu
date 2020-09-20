import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import AudioPlayer from "../components/audioPlayer"
import SanityImage from "../components/sanityImage"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPortfolio {
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

  return (
    <Layout title="Portfolio">
      <Box w="100%" minH="calc(100vh - 4rem)" bg="gray.800">
        <Container>
          {data.sanityPortfolio.projects.map((project, i) => {
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
                        src={project.artwork.asset.url}
                        width={400}
                        height={400}
                        alt={project.artAlt}
                      />
                    </Box>
                    <AudioPlayer src={project.media.asset.url.toString()} />
                  </Flex>
                  <Flex direction="column">
                    <Heading color="purple.50" mb={[".5rem", "1rem"]}>
                      {project.title.toUpperCase()}
                    </Heading>
                    <Box color="purple.50">
                      <BlockContent blocks={project._rawNotes} />
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
