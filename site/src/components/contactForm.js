/** @jsx jsx */

import React from "react"
import { useForm } from "react-hook-form"
import { css, jsx } from "@emotion/core"
import { theme, Flex, Box } from "@chakra-ui/core"

const formStyles = css`
  display: flex;
  flex-direction: column;

  label {
    color: ${theme.colors.purple[50]};
    padding-top: 1.25rem;
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes["xl"]};
  }

  input,
  textarea {
    padding-left: 0.75em;
    margin: 0.5rem 0;
    border: 1px solid ${theme.colors.purple[100]};
    background-color: ${theme.colors.purple[50]};
    color: ${theme.colors.gray[800]};
    border-radius: 2px;
    font-size: ${theme.fontSizes["xl"]};
    line-height: ${theme.lineHeights.taller};
  }

  p {
    color: ${theme.colors.red[400]};
    font-size: ${theme.fontSizes["xl"]};
  }

  .button {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: fit-content;
    padding: 0.25rem 1.25rem;
    margin-top: 1.75rem;
    background-color: ${theme.colors.purple[400]};
    border: none;
    color: ${theme.colors.purple[50]};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes["lg"]};
  }
`

const ContactForm = ({ ...props }) => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Box {...props}>
      <form css={formStyles} onSubmit={handleSubmit(onSubmit)}>
        <Flex direction={["column", "row"]} justify="space-between">
          <Flex w={["100%", "calc(50% - 12px)"]} direction="column">
            <label>First Name</label>
            <input name="firstName" ref={register({ required: true })} />
            {errors.firstName && <p>Your first name is required</p>}
          </Flex>
          <Flex w={["100%", "calc(50% - 12px)"]} direction="column">
            <label>Last Name</label>
            <input name="lastName" ref={register({ required: true })} />
            {errors.lastName && <p>Your last name is required</p>}
          </Flex>
        </Flex>
        <label>Email Address</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <p>Your email address is required</p>}
        <label>Message</label>
        <textarea
          name="message"
          ref={register({ required: true, minLength: 2 })}
          rows={8}
        />
        {errors.message?.type === "required" && <p>A message is required</p>}
        {errors.message?.type === "minLength" && (
          <p>Your message must be more than 2 characters long</p>
        )}
        <input className="button" type="submit" />
      </form>
    </Box>
  )
}

export default ContactForm
