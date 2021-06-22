import React from 'react'
import App from './App'
import theme, { lightTheme } from './theme'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { DarkToggler } from './components'

const AppProvider = () => {
  const [dark, setDark] = React.useState<boolean>(
    localStorage.getItem('theme') === 'light' ? false : true
  )
  const toggleTheme = () => {
    localStorage.setItem('theme', dark ? 'light' : 'dark')
    setDark(!dark)
  }
  return (
    <ThemeProvider theme={dark ? theme : lightTheme}>
      <CssBaseline />
      <DarkToggler onClick={toggleTheme} />
      <App />
    </ThemeProvider>
  )
}

export default AppProvider
