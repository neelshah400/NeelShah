import { Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const Headlines = () => {

  const headlines: string[] = useBreakpointValue({
    base: [
      'Technology Summer Analyst @ Morgan Stanley',
      'CS @ UMD'
    ],
    sm: [
      'Technology Summer Analyst at Morgan Stanley',
      'Computer Science Student at the University of Maryland'
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