import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import * as CONSTANTS from '../constants'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import Hero from '../components/Hero'

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container maxW="container.xl">
        {CONSTANTS.SECTIONS.map(section => 
          <Section key={section.id} name={section.name} id={section.id}>{section.component}</Section>
        )}
      </Container>
    </>
  )
}

export default Index
