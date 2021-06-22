import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export const lightTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: '#757575',
      light: '#bdbdbd',
      dark: '#212121',
    },
    background: {
      default: '#141e30',
      paper: '#303044',
    },
    type: 'dark',
  },
})
export default theme
