import { Box, Button, CloseButton, Flex, Heading, HStack, Icon, IconButton, Link, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { AiFillCode, AiOutlineMenu } from 'react-icons/ai'
import * as CONSTANTS from '../constants'
import { ColorModeToggle } from './ColorModeToggle'

export const Header = () => {

  const bg: string = useColorModeValue('white', 'gray.800')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={bg} zIndex="sticky" h={CONSTANTS.HEADER_HEIGHT} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="sm" position="fixed" top={0}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack>
          <NextLink href="#">
            <Icon as={AiFillCode} boxSize={6} />
          </NextLink>
          <Heading as="h1" size="md" fontWeight="medium" ml="2">Neel Shah</Heading>
        </HStack>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={1} mr={1} display={{ base: "none", md: "inline-flex" }}>
            {CONSTANTS.SECTIONS.map(section => (
              <NextLink key={section.id} href={section.href}>
                <Button variant="ghost">{section.name}</Button>
              </NextLink>
            ))}
            <ColorModeToggle />
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <ColorModeToggle />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={onOpen}
            />
            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={onClose} />
              {CONSTANTS.SECTIONS.map(section => (
                <NextLink key={section.id} href={section.href}>
                  <Button w="full" variant="ghost" onClick={onClose}>{section.name}</Button>
                </NextLink>
              ))}
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
  
}
