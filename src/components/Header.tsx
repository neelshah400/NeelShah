import React from 'react'
import NextLink from 'next/link'
import { Box, Button, CloseButton, Flex, Heading, HStack, IconButton, Link, Text, useColorModeValue, useDisclosure, VisuallyHidden, VStack } from '@chakra-ui/react';
import * as CONSTANTS from '../constants'

export const Header = () => {

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" position="fixed" top={0}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <Link href="/" title="Home Page" display="flex" alignItems="center">
            {/* <Logo /> */}
            <Text>Logo</Text>
            <VisuallyHidden>Neel Shah</VisuallyHidden>
          </Link>
          <Heading as="h1" size="md" fontWeight="medium" ml="2">
            Neel Shah
          </Heading>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
            {Object.values(CONSTANTS.SECTIONS).map(section => (
              <NextLink href={section.href}>
                <Button variant="ghost">{section.name}</Button>
              </NextLink>
            ))}
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              //   icon={<AiOutlineMenu />}
              icon={<Text>AiOutlineMenu</Text>}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
              {Object.values(CONSTANTS.SECTIONS).map(section => (
                <NextLink href={section.href}>
                  <Button w="full" variant="ghost">{section.name}</Button>
                </NextLink>
              ))}
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}
