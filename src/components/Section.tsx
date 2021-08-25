import { Box, Heading } from '@chakra-ui/react'
import React, { ComponentProps } from 'react'

export const Section = (props: ComponentProps<any>) => {
  const { name, id, children } = props
  return (
    <Box id={id} p={3}>
      <Heading as="h1">{name}</Heading>
      <Box pt={3}>
        {children}
      </Box>
    </Box>
  )
}