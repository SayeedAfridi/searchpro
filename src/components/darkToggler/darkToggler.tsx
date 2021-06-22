import { makeStyles, Tooltip } from '@material-ui/core'
import React from 'react'
import Sun from './sun'
import Moon from './moon'

export interface DarkTogglerProps {
  onClick: () => void
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '45pt',
    overflow: 'hidden',
    height: '45pt',
    position: 'absolute',
    cursor: 'pointer',
    top: '30px',
    right: '30px',
    [theme.breakpoints.down('xs')]: {
      top: '15px',
      right: '5px',
    },
  },
  sun: {
    position: 'absolute',
    transform:
      theme.palette.type === 'light' ? 'translateY(0)' : 'translateY(-100px)',
    transition: 'all 0.5s ease-in-out',
  },
  moon: {
    position: 'absolute',
    transform:
      theme.palette.type === 'dark' ? 'translateY(0)' : 'translateY(100px)',
    transition: 'all 0.5s ease-in-out',
  },
}))

const DarkToggler: React.FC<DarkTogglerProps> = ({ onClick }) => {
  const classes = useStyles()
  return (
    <Tooltip title='Toggle dark/light mode'>
      <div onClick={onClick} className={classes.container}>
        <Sun className={classes.sun} />
        <Moon className={classes.moon} />
      </div>
    </Tooltip>
  )
}

export default DarkToggler
