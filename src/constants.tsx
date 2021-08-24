import React from 'react'
import { About, Education, Experience, Projects, Skills } from './components/sections'

export const SECTIONS = {
  ABOUT: {
    name: 'About Me',
    href: '#about',
    component: <About />
  },
  SKILLS: {
    name: 'Skills',
    href: '#skills',
    component: <Skills />
  },
  EDUCATION: {
    name: 'Education',
    href: '#education',
    component: <Education />
  },
  EXPERIENCE: {
    name: 'Experience',
    href: '#experience',
    component: <Experience />
  },
  PROJECTS: {
    name: 'Projects',
    href: '#projects',
    component: <Projects />
  }
}