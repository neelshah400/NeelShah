import { Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export const Headlines = () => {

  const headlines = useBreakpointValue({
    base: [
      'CS @ UMD',
      'SWE Intern @ Bloomberg'
    ],
    sm: [
      'Computer Science Student at the University of Maryland',
      'Software Engineering Intern at Bloomberg'
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