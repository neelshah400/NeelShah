import { Wrap } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from '../ExperienceCard'

export const Experience = () => {

  const cards: { organization: string, location: string, dates: string, role: string, image: string, bullets: string[] }[] = [
    {
      organization: 'Capgemini Government Solutions',
      location: 'McLean, VA',
      dates: 'Jun 2022 \u2013 Aug 2022',
      role: 'Technical Intern',
      image: '/capgemini.png',
      bullets: [
        'Worked on a robotic process automation (RPA) project for the Software as a Service (SaaS) capability team',
        'Automated the provisioning of users in Salesforce using data exported from an HR system, through the development of a UiPath attended bot with robust error/interruption handling capabilities, which reduced processing time by more than 80%, improved data accuracy, and freed up time for team members to work on higher priority tasks (duties included designing, developing, testing, writing documentation, deploying, and conducting demonstrations to stakeholders)',
        'Worked with 2 other interns to explore the viability of virtual reality (VR) for use by Capgemini Government Solutions and its clients, through hands-on experience with the Oculus Quest 2 and extensive market research, culminating in a presentation made to top company executives'
      ]
    },
    {
      organization: 'Bloomberg',
      location: 'Dayton, NJ',
      dates: 'Jun 2021 \u2013 Aug 2021',
      role: 'Software Engineering Intern',
      image: '/bloomberg.png',
      bullets: [
        'Worked on the Fleet Automation Services team, which supports Bloomberg’s large-scale technology infrastructure by developing tools used to automate operations',
        'Enabled Environment Support team to manage machine turnaround (maintenance operations) via a web application more efficiently by developing several features, including the ability to set different retry actions per host when rerunning failed jobs, using Angular (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend',
        'Created reproducible development/build environments for the Angular frontend by containerizing it using Docker',
        'Improved data visibility by publishing metrics for maintenance events, actions, and failures to a telemetry system via the Django backend and creating a filterable Grafana dashboard displaying timeseries graphs of these metrics'
      ]
    },
    {
      organization: 'Bloomberg',
      location: 'Dayton, NJ',
      dates: 'Jul 2020 \u2013 Aug 2020',
      role: 'Software Engineering Intern',
      image: '/bloomberg.png',
      bullets: [
        'Worked on the Environment Support Site Reliability Engineering team, which automates machine turnaround (maintenance operations) for a fleet of over 30,000 servers',
        'Provided valuable insight into turnaround data for Environment Support team by developing an interactive web application to visualize metrics such as runtime, failure rates, and failure reasons at the host, schedule, and cluster levels, using React (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend'
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