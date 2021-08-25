import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  
  const bullets: string[] = [
    'I am a freshman at the University of Maryland pursuing a degree in computer science. Aside from technology, my interests include math and economics.',
    'This past summer, I returned to Bloomberg as a software engineering intern on the Fleet Automation Services team. It was a great experience, and I learned a lot throughout the summer.',
    'I am always eager to learn more and am interested in any potential internship/job opportunities. Please feel free to reach out about any opportunities or if you want to learn more about me.'
  ]

  return (
    <UnorderedList>
      {bullets.map((sentence, index) => <ListItem key={index} pt={1} fontSize="lg">{sentence}</ListItem>)}
    </UnorderedList>
  )

}