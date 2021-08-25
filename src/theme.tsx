import { extendTheme } from '@chakra-ui/react'
import * as CONSTANTS from './constants'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
