import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppBar from '@material-ui/core/AppBar'
import { SwipeableDrawer, Toolbar, makeStyles, Theme, createStyles, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-start',
      backgroundColor: '#9E211E',
      paddingLeft: '80px',
      '@media (max-width:600px)': {
        paddingLeft: '10px'
      }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      marginLeft: '20px',
      textAlign: 'center',
      '&:hover': {
        // background: '#7A0907',
        cursor: 'pointer'
      }
    }
  })
)

export const NavBar = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  const [toggleDrawer, setToggleDrawer] = useState(false)
  const isNarrowWidth = useMediaQuery('(max-width:600px)')
  const navNames = ['home', 'about', 'menu', 'order-online', 'contact']
  return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {isNarrowWidth
                  ? <>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() => setToggleDrawer(!toggleDrawer)} >
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer
                            anchor={'top'}
                            open={toggleDrawer}
                            onClose={() => {
                              setToggleDrawer(false)
                              return false
                            }}
                            onOpen={() => {
                              setToggleDrawer(true)
                              return true
                            }}
                        >
                            <List>
                                {navNames.map((name) => (
                                    <ListItem button key={name} onClick={() => {
                                      history.push(`/${name === 'home' ? '' : name}`)
                                      setToggleDrawer(false)
                                    }}>
                                        <ListItemText primary={t(`common.${name}`)} />
                                    </ListItem>
                                ))}
                            </List>
                        </SwipeableDrawer>
                    </>
                  : <>
                        {navNames.map((name) =>
                            <Typography
                                className={classes.title}
                                variant="subtitle2" key={name}
                                onClick={() => history.push(`/${name === 'home' ? '' : name}`)}>
                                {t(`common.${name}`)}
                            </Typography>
                        )}
                    </>
                }
            </Toolbar>
        </AppBar>
    </div>
}
