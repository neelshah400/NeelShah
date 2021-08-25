import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { Icon as Iconify } from '@iconify/react'
import React from 'react'

const ListCard = ({ name, icon, skills }) => {
  const color = useColorModeValue("gray.700", "gray.200")
  return (
    <Box w="sm" mx="auto" bg={useColorModeValue("white", "gray.800")} shadow="lg" rounded="lg" overflow="hidden">
      <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Iconify icon={icon} height={48} width={48} />
        <Text mx={3} color="white" fontWeight="bold" fontSize="lg">{name}</Text>
      </Flex>
      <Box pb={4} px={6}>
        {skills.map(skill => (
          <Flex key={skill.name} alignItems="center" mt={4} color={color}>
            <Iconify icon={skill.icon} height={24} width={24} />
            <Text px={2} fontSize="lg">{skill.name}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default ListCard;