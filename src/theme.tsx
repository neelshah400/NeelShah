import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const headerHeight = 75

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
        'scroll-padding-top': `${headerHeight}px`
      },
      body: {
        'margin': `${headerHeight}px auto`
      }
    }
  }
})

export default theme
