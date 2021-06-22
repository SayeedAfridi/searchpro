import { makeStyles, Typography, fade, Theme } from '@material-ui/core'
import React from 'react'
import { grey } from '@material-ui/core/colors'

export interface CardProps {
  style?: React.CSSProperties
  title: string
  children: React.ReactNode
  poweredBy: string
}

const useStyles = makeStyles<Theme>((theme) => ({
  card: {
    padding: theme.spacing(3),
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      boxShadow: `0 0 0`,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: fade(theme.palette.background.paper, 0.5),
    boxSizing: 'border-box',
    boxShadow: `0 15px 25px rgba(0, 0, 0, 0.5)`,
    borderRadius: '10px',
    position: 'relative',
  },
  powered: {
    textAlign: 'center',
    color: theme.palette.type === 'light' ? grey[500] : grey[700],
    marginTop: theme.spacing(2),
  },
}))

const Card: React.FC<CardProps> = ({ style, title, children, poweredBy }) => {
  const classNames = useStyles()
  return (
    <div className={classNames.card}>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='overline'>Search like a pro</Typography>
      {children}
      <Typography variant='subtitle2' className={classNames.powered}>
        Powerd by {poweredBy}
      </Typography>
    </div>
  )
}

export default Card
