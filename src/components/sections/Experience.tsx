import { Wrap } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from '../ExperienceCard'

export const Experience = () => {

  const cards: { organization: string, location: string, dates: string, role: string, image: string, bullets: string[] }[] = [
    {
      organization: 'Bloomberg',
      location: 'Dayton, NJ',
      dates: 'Jun 2021 \u2013 Aug 2021',
      role: 'Software Engineering Intern',
      image: 'http://assets.stickpng.com/images/608ff6fc5d1f990004970e68.png',
      bullets: [
        'Worked on the Fleet Automation Services team, which supports Bloomberg’s large-scale technology infrastructure by developing tools used to automate operations (used Jira with agile scrum methodology for project management)',
        'Improved UX and added features to an existing web application according to requests from operators, using Angular (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend as well as Docker for development',
        'Published metrics for maintenance events, actions, and failures to a telemetry system; created a filterable Grafana dashboard displaying timeseries graphs of these metrics in order to improve data visibility'
      ]
    },
    {
      organization: 'Bloomberg',
      location: 'Dayton, NJ',
      dates: 'Jul 2020 \u2013 Aug 2020',
      role: 'Software Engineering Intern',
      image: 'http://assets.stickpng.com/images/608ff6fc5d1f990004970e68.png',
      bullets: [
        'Worked on the Environment Support Site Reliability Engineering team, which automates machine turnaround (maintenance) for a fleet of over 30,000 servers (used Jira with agile scrum methodology for project management)',
        'Developed an interactive web application to visualize turnaround data at the host, schedule, and cluster level, using Angular/React (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend'
      ]
    }
  ]

  return (
    <Wrap spacing={5} align="center">
      {cards.map((card, index) => (
        <ExperienceCard key={index} {...card} />
      ))}
    </Wrap>
  )

}