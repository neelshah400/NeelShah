import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ColorModeToggle = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <IconButton aria-label={'label'} icon={isDark ? <SunIcon /> : <MoonIcon />} variant="ghost" onClick={toggleColorMode} />
  )
  
}
