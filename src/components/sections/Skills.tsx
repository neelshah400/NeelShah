import { Wrap } from '@chakra-ui/react';
import React from 'react';
import ListCard from '../ListCard';

export const Skills = () => {

  const cards = [
    {
      name: 'Programming Languages',
      icon: 'ant-design:code-outlined',
      skills: [
        { name: 'Java', icon: 'logos:java' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
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
        { name: 'Flask', icon: 'file-icons:flask' },
        { name: 'Django', icon: 'vscode-icons:file-type-django' },
      ]
    },
    {
      name: 'Other',
      icon: 'mdi:web',
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
    <Wrap justify="center" spacing={5}>
      {cards.map(card => (
        <ListCard key={card.name} name={card.name} icon={card.icon} skills={card.skills} />
      ))}
    </Wrap>

  )
}