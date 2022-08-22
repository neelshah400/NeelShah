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
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'C', icon: 'vscode-icons:file-type-c3' },
        { name: 'C#', icon: 'vscode-icons:file-type-csharp2' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' }
      ]
    },
    {
      name: 'Web Development',
      icon: 'mdi:web',
      skills: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Angular', icon: 'vscode-icons:file-type-angular' },
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
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'Docker', icon: 'vscode-icons:file-type-docker2' },
        { name: 'Node.js', icon: 'vscode-icons:file-type-node2' },
        { name: 'Android', icon: 'flat-color-icons:android-os' },
        { name: 'Unity', icon: 'cib:unity' },
        { name: 'UiPath', icon: '/uipath.png' },
        { name: 'Grafana', icon: 'logos:grafana' },
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