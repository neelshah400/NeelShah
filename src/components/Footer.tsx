import { Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from './Link'

export const Footer = () => {
  return (
    <VStack align="center" spacing={5} pt={20}>
      <Text>Website created and designed by Neel Shah.</Text>
      <Flex>
        <Link href="tel:+17329251305" target="_blank" color={useColorModeValue('purple.600', 'purple.400')}>(732) 925-1305</Link>
        <Text>&nbsp;&bull;&nbsp;</Text>
        <Link href="mailto:neelshah400@gmail.com" target="_blank" color={useColorModeValue('purple.600', 'purple.400')}>neelshah400@gmail.com</Link>
      </Flex>
      <Text>Copyright &copy; {new Date().getFullYear()} Neel Shah. All rights reserved.</Text>
    </VStack>
  )
}