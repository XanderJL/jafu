import React from "react"
import { Heading, Link, Text } from "@chakra-ui/core"
import SanityImage from "./sanityImage"
import Iframe from "react-iframe"

const serializers = {
  types: {
    block: props => {
      const { style = "normal" } = props.node

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "")
        return (
          <Heading as={`h${level}`} fontSize="5xl" mb="1rem">
            {props.children}
          </Heading>
        )
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>
      }

      return <Text fontSize="xl">{props.children}</Text>
    },
    image: props => {
      return <SanityImage src={props.node.asset._ref} />
    },
    iframe: props => {
      return <Iframe url={props.node.url} height="120px" width="100%" />
    },
  },
  marks: {
    link: props => {
      return (
        <Link href={props.mark.href} color="purple.300">
          {props.children}
        </Link>
      )
    },
  },
}

export default serializers
