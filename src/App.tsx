import React from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
import { Select, Card } from './components'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Card poweredBy='IT VANILLA' title='Search Pro'>
        <Select />
      </Card>
    </Container>
  )
}

export default App
