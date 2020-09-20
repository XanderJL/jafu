/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { Image } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import imageUrlBuilder from "@sanity/image-url"

const SanityImage = ({ src, width, height, alt, props }) => {
  return (
    <Image
      src={imageUrlBuilder({
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      })
        .image(src)
        .width(width)
        .height(height)}
      alt={alt}
      // css={css`
      //   max-width: ${width ? width + "px" : "auto"};
      //   max-height: ${height ? height + "px" : "auto"};
      // `}
      {...props}
    />
  )
}

SanityImage.propTypes = {
  src: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
}

export default SanityImage
