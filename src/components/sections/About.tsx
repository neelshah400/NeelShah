import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  
  const bullets: string[] = [
    'I am a student at the University of Maryland pursuing a degree in Computer Science, with a minor in Statistics.',
    'My interests include full stack web development, data science, artificial intelligence, automation, and more.',
    'I have internship experience at companies like Morgan Stanley, Capgemini Government Solutions, and Bloomberg.',
    'I am always eager to learn new things and am interested in any potential job opportunities! Please feel free to reach out about any opportunities or if you want to learn more about me.'
  ]

  return (
    <UnorderedList>
      {bullets.map((sentence, index) => <ListItem key={index} pt={1} fontSize="lg">{sentence}</ListItem>)}
    </UnorderedList>
  )

}