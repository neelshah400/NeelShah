import { Container } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'
import Hero from '../components/Hero'
import { Section } from '../components/Section'
import * as CONSTANTS from '../constants'

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
