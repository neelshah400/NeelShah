import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import * as CONSTANTS from './constants'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      html: {
        scrollPaddingTop: `${CONSTANTS.HEADER_HEIGHT}px`
      },
      body: {
        margin: `${CONSTANTS.HEADER_HEIGHT}px auto`
      }
    }
  }
})

export default theme
