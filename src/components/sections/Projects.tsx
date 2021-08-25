import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from '../Link'

export const Projects = () => {
  return (
    <>
      <Text fontSize="lg">
        My projects are currently being added to this site. For now, check out my&nbsp;
        <Link href="https://github.com/neelshah400/" target="_blank" color={useColorModeValue('purple.600', 'purple.400')} >
          GitHub profile
        </Link>&nbsp;to see what I&apos;ve been working on.
      </Text>
    </>
  )
}