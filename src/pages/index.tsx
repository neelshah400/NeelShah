import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { About, Education } from '../components/sections/'
import { Header } from '../components/Header'
import * as CONSTANTS from '../constants'
import { Section } from '../components/Section'

const Index = () => {
  console.log(CONSTANTS.SECTIONS.ABOUT.component)
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        {Object.values(CONSTANTS.SECTIONS).map(section => 
          <Section name={section.name}>{section.component}</Section>
        )}
      </Container>
    </>
  )
}

export default Index
