import { Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const Headlines = () => {

  const headlines: string[] = useBreakpointValue({
    base: [
      'CS @ UMD',
      'Prev @ Morgan Stanley, Capgemini, Bloomberg'
    ],
    sm: [
      'Computer Science student at the University of Maryland',
      'Previously interned at Morgan Stanley, Capgemini, and Bloomberg'
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