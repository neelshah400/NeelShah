import { Wrap } from '@chakra-ui/react'
import React from 'react'
import SkillsCard from '../SkillsCard'

export const Skills = () => {

  const cards: { name: string, icon: string, skills: { name: string, icon: string }[] }[] = [
    {
      name: 'Programming Languages',
      icon: 'ant-design:code-outlined',
      skills: [
        { name: 'Java', icon: 'logos:java' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'C', icon: 'logos:c' },
        { name: 'C#', icon: 'logos:c-sharp' }
      ]
    },
    {
      name: 'Web Development',
      icon: 'mdi:web',
      skills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'Express', icon: 'simple-icons:express' },
        { name: 'Flask', icon: 'file-icons:flask' },
        { name: 'Django', icon: 'vscode-icons:file-type-django' },
      ]
    },
    {
      name: 'Other',
      icon: 'ri:computer-fill',
      skills: [
        { name: 'Linux', icon: 'logos:linux-tux' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Android', icon: 'flat-color-icons:android-os' },
        { name: 'Unity', icon: 'cib:unity' },
        { name: 'Jira', icon: 'logos:jira' },
      ]
    },
  ]

  return (
    <Wrap spacing={5} align="center">
      {cards.map(card => (
        <SkillsCard key={card.name} name={card.name} icon={card.icon} skills={card.skills} />
      ))}
    </Wrap>
  )

}