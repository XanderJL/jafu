import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import theme from "./src/components/theme"
import "./src/styles/fonts.css"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
