import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  PseudoBox,
  Grid,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPortfolio {
        title
        images {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const { title, images } = data.sanityPortfolio
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalImage, setModalImage] = useState(null)

  return (
    <Layout title={title}>
      <Box w="100%" minH="calc(100vh - 4rem)" bg="gray.800">
        <Container>
          <Grid
            gap="16px"
            templateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(auto-fill, 200px)",
            }}
            autoRows="200px"
          >
            {images.map(({ asset }) => {
              const { fluid } = asset
              return (
                <PseudoBox
                  as="button"
                  w="100%"
                  h="100%"
                  justifySelf="center"
                  alignSelf="center"
                  onClick={() => {
                    onOpen()
                    setModalImage(fluid.src)
                  }}
                >
                  <Image
                    src={fluid.src}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </PseudoBox>
              )
            })}
          </Grid>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
              <ModalContent>
                <ModalCloseButton color="white" />
                <Image src={modalImage} />
              </ModalContent>
            </ModalOverlay>
          </Modal>
        </Container>
      </Box>
    </Layout>
  )
}

export default Portfolio
