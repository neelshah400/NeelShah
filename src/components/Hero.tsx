import { Box, Heading, HStack, IconButton, Tooltip, useColorModeValue, VStack } from '@chakra-ui/react'
import { Icon as Iconify } from '@iconify/react'
import React from 'react'
import * as CONSTANTS from '../constants'
import CustomImage from './CustomImage'
import { Headlines } from './Headlines'
import { Link } from './Link'

const Hero = () => {

  const bg = useColorModeValue('gray.100', 'gray.700')

  const buttons: { label: string, href: string, icon: string }[] = [
    {
      label: 'Phone: (732) 925-1305',
      href: 'tel:+17329251305',
      icon: 'ant-design:phone-filled'
    },
    {
      label: 'Email: neelshah400@gmail.com',
      href: 'mailto:neelshah400@gmail.com',
      icon: 'ant-design:mail-filled'
    },
    {
      label: 'Github: neelshah400',
      href: 'https://github.com/neelshah400/',
      icon: 'ant-design:github-filled'
    },
    {
      label: 'LinkedIn: neelshah400',
      href: 'https://www.linkedin.com/in/neelshah400/',
      icon: 'ant-design:linkedin-filled'
    },
    {
      label: 'Resume: View PDF',
      href: '/resume.pdf',
      icon: 'ant-design:file-pdf-filled'
    }
  ]

  return (
    <VStack flexDir="column" h={`calc(100vh - ${CONSTANTS.HEADER_HEIGHT}px)`} minHeight="540px">
      <Box pt="10vh">
        <CustomImage width="150" height="150" borderRadius="full" src="/avatar.jpg" alt="Neel Shah" />
      </Box>
      <Heading as="h1" size="2xl" pt={5}>Neel Shah</Heading>
      <Headlines />
      <HStack pt="10vh" pb="10vh" spacing={4}>
        {buttons.map(button => (
          <Link key={button.href} href={button.href} target="_blank">
            <Tooltip label={button.label}>
              <span>
                <IconButton aria-label={button.label} icon={<Iconify icon={button.icon} />} size="lg" bg={bg} />
              </span>
            </Tooltip>
          </Link>
        ))}
      </HStack>
    </VStack>
  )

}

export default Hero