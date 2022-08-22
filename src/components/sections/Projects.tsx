import { Text, useColorModeValue, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from '../Link'
import ProjectCard from '../ProjectCard'

export const Projects = () => {

  const cards: { project: string, dates: string, buttons: { label: string, href: string, icon: string }[], image: string, bullets: string[] }[] = [
    {
      project: 'Portfolio Website - neelshah.dev',
      dates: 'Aug 2021 \u2013 Present',
      buttons: [
        {
          label: 'GitHub',
          href: 'https://github.com/neelshah400/neelshah',
          icon: 'akar-icons:github-fill'
        },
        {
          label: 'Website',
          href: 'https://www.neelshah.dev/',
          icon: 'akar-icons:globe'
        }
      ],
      image: '/favicon.png',
      bullets: [
        'Portfolio website which includes overview, contact information/links, about me, skills, education, experience, and projects',
        'Built responsive, mobile-friendly site using React (TypeScript); hosted on my own domain using Vercel'
      ]
    },
    {
      project: 'Factsvine',
      dates: 'Nov 2019',
      buttons: [
        {
          label: 'GitHub',
          href: 'https://github.com/neelshah400/factsvine',
          icon: 'akar-icons:github-fill'
        },
        {
          label: 'Website',
          href: 'https://factsvine-news.herokuapp.com/',
          icon: 'akar-icons:globe'
        }
      ],
      image: '/github.png',
      bullets: [
        'Site which summarizes news articles and evaluates them for fake news (built during 24-hour hackathon)',
        'Developed Flask web app using a natural language processing library and fake news detection API (Python)'
      ]
    }
  ]

  return (
    <>
      <Text fontSize="lg">
        A few of my projects are shown below. To see more, check out my&nbsp;
        <Link href="https://github.com/neelshah400/" target="_blank" color={useColorModeValue('purple.600', 'purple.400')} >
          GitHub profile
        </Link>.
      </Text>
      <Wrap mt={5} spacing={5} align="center">
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </Wrap>
    </>
  )

}