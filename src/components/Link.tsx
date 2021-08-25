import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { ComponentProps } from 'react'

export const Link = (props: ComponentProps<any>) => {
  const { children, href, ...rest } = props
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}