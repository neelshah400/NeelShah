import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { Icon as Iconify } from '@iconify/react'
import React from 'react'

const SkillsCard = ({ name, icon, skills }: { name: string, icon: string, skills: { name: string, icon: string }[] }) => {
  return (
    <Box w="sm" mx="auto" shadow="lg" rounded="lg" overflow="hidden" bg={useColorModeValue('gray.100', 'gray.700')}>
      <Accordion allowToggle w="100%">
        <AccordionItem border="3px">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Flex alignItems="center">
                <Iconify icon={icon} height={48} width={48} />
                <Text mx={3} fontWeight="bold" fontSize="lg">{name}</Text>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {skills.map(skill => (
              <Flex key={skill.name} alignItems="center" py={1}>
                <Iconify icon={skill.icon} height={24} width={24} />
                <Text px={2} fontSize="lg">{skill.name}</Text>
              </Flex>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default SkillsCard;