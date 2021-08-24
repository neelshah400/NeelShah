import React from 'react'
import { About, Education, Experience, Projects, Skills } from './components/sections'

export const HEADER_HEIGHT = 75

export const SECTIONS = [
  {
    name: 'About Me',
    id: 'about',
    href: '#about',
    component: <About />
  },
  {
    name: 'Skills',
    id: 'skills',
    href: '#skills',
    component: <Skills />
  },
  {
    name: 'Education',
    id: 'education',
    href: '#education',
    component: <Education />
  },
  {
    name: 'Experience',
    id: 'experience',
    href: '#experience',
    component: <Experience />
  },
  {
    name: 'Projects',
    id: 'projects',
    href: '#projects',
    component: <Projects />
  }
]