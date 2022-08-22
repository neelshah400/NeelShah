import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Hero from '../components/Hero'
import { Section } from '../components/Section'
import * as CONSTANTS from '../constants'

const Index = () => {

  const title = 'Neel Shah'
  const author = 'Neel Shah'
  const description = `Neel Shah's portfolio website includes an overview, contact information/links, about me, skills, education, experience, and projects.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head> 
        <Header />
        <Container maxW="container.xl">
          <Hero />
          {CONSTANTS.SECTIONS.map(section =>
            <Section key={section.id} name={section.name} id={section.id}>{section.component}</Section>
          )}
          <Footer />
        </Container>
    </>
  )

}

export default Index
