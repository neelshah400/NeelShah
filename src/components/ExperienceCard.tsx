import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import CustomImage from './CustomImage';

const ExperienceCard = ({ organization, location, dates, role, image, bullets }: { organization: string, location: string, dates: string, role: string, image: string, bullets: string[] }) => {
  return (
    <Flex w="sm" mx="auto" bg={useColorModeValue('gray.100', 'gray.700')} rounded="lg" shadow="lg" overflow="hidden">
      <Accordion allowToggle w="100%">
        <AccordionItem border="3px">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <HStack spacing={4}>
                <CustomImage width="50" height="50" src={image} alt={`${organization} logo`} />
                <VStack align="left" spacing={0}>
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">{location} &bull; {dates}</Text>
                  <Text fontSize="2xl" fontWeight="bold">{organization}</Text>
                  <Text mt={2} fontSize="md">{role}</Text>
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
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default ExperienceCard