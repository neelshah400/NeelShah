import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export const Section = (props) => {
  const { name, children } = props
  return (
    <Box p={3}>
      <Heading as="h1">{name}</Heading>
      <Box pt={3}>
        {children}
      </Box>
    </Box>
  )
}