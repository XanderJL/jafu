/** @jsx jsx */
import React, { useEffect, useState, useRef, useCallback } from "react"
import PropTypes from "prop-types"
import { theme, Box, Flex } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { GrPlayFill, GrPauseFill } from "react-icons/gr"

const AudioPlayer = ({ src }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [sliderPos, setSliderPos] = useState(0)
  const mediaPlayer = useRef(null)
  const progressBar = useRef(null)

  return <audio ref={mediaPlayer} src={src} preload="metadata" controls></audio>
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
}

export default AudioPlayer
