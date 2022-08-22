import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, IconButton, ListItem, Text, Tooltip, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react';
import { Icon as Iconify } from '@iconify/react'
import { Link } from './Link'
import React from 'react'
import CustomImage from './CustomImage'

const ProjectCard = ({ project, dates, buttons, image, bullets }: { project: string, dates: string, buttons: { label: string, href: string, icon: string }[], image: string, bullets: string[] }) => {

  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex w="sm" mx="auto" bg={useColorModeValue('gray.100', 'gray.700')} rounded="lg" shadow="lg" overflow="hidden">
      <Accordion allowToggle w="100%">
        <AccordionItem border="3px">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <HStack spacing={4}>
                <CustomImage width="50" height="50" src={image} alt={`${project} logo`} />
                <VStack align="left" spacing={0}>
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">{dates}</Text>
                  <Text fontSize="2xl" fontWeight="bold">{project}</Text>
                </VStack>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              {bullets.map((bullet, index) => (
                <ListItem key={index}>{bullet}</ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
          <HStack>
            {buttons.map(button => (
              <Link key={button.href} href={button.href} target="_blank">
                <Tooltip label={button.label}>
                  <span>
                    <IconButton aria-label={button.label} icon={<Iconify icon={button.icon} />} size="lg" variant="ghost" />
                  </span>
                </Tooltip>
              </Link>
            ))}
          </HStack>
        </AccordionItem>
      </Accordion>
    </Flex>
  )

}

export default ProjectCard