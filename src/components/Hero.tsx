import { Box, Heading, HStack, IconButton, Image, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai'
import * as CONSTANTS from '../constants'
import { Headlines } from './Headlines'
import { Link } from './Link'

const Hero = () => {

  const buttons = [
    {
      label: 'Phone: (732) 925-1305',
      href: 'tel:+17329251305',
      icon: <AiFillPhone />
    },
    {
      label: 'Email: neelshah400@gmail.com',
      href: 'mailto:neelshah400@gmail.com',
      icon: <AiFillMail />
    },
    {
      label: 'Github: neelshah400',
      href: 'https://github.com/neelshah400/',
      icon: <AiFillGithub />
    },
    {
      label: 'LinkedIn: neelshah400',
      href: 'https://www.linkedin.com/in/neelshah400/',
      icon: <AiFillLinkedin />
    },
    {
      label: 'Resume: View PDF',
      href: '/resume.pdf',
      icon: <AiFillFilePdf />
    }
  ]

  return (
    <VStack flexDir="column" h={`calc(100vh - ${CONSTANTS.HEADER_HEIGHT}px)`}>
      <Box pt="10vh">
        <Image borderRadius="full" boxSize={40} src="/avatar.jpg" alt="Neel Shah" />
      </Box>
      <Heading as="h1" size="2xl" pt={5}>Neel Shah</Heading>
      <Headlines />
      <HStack pt="10vh" pb="10vh" spacing={4}>
        {buttons.map(button => (
          <Link key={button.href} href={button.href}>
            <Tooltip label={button.label}>
              <span>
                <IconButton aria-label={button.label} icon={button.icon} size="lg" />
              </span>
            </Tooltip>
          </Link>
        ))}
      </HStack>
    </VStack>
  )

}

export default Hero