import { Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const Headlines = () => {

  const headlines: string[] = useBreakpointValue({
    base: [
      'CS @ UMD',
      'Technical Intern @ Capgemini Government Solutions'
    ],
    sm: [
      'Computer Science Student at the University of Maryland',
      'Technical Intern at Capgemini Government Solutions'
    ]
  })

  return headlines ? <>
    {headlines.map((headline, index) => (
      <Text key={index} align="center" fontSize="2xl" pt={index === 0 ? 10 : 0} flexGrow={index === headlines.length - 1 ? 1 : 0}>
        {headline}
      </Text>
    ))}
  </> : <></>

}