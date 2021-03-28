import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Container,
  makeStyles,
  createStyles,
  Link
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { ItemList } from './ItemList'
import { menuItems } from './helpers/menuItems'
import { NavigationBar } from './NavigationBar'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    tabs: {
      flexGrow: 1,
      width: '100%'
    },
    bannerBox: {
      alignItems: 'center'
    },
    alertBox: {
      marginBottom: '50px'
    },
    title: {
      paddingBottom: '40px'
    }
  })
)

export const OrderOnline = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <>
      <div className={classes.alertBox}>
        <Alert severity="info">
          <p className={classes.bannerBox}>
            Påskestengt - vi holder stengt den 01.04 t.o.m 04.04 🐣
        </p>
        </Alert>
      </div>

      <Alert severity="info">
        <p className={classes.bannerBox}>
          Yamazaki tilbyr nå kun takeaway på spisestedet grunnet covid-19. Er det ønskelig med levering kan dette gjøres gjennom
        </p>
        <Link href="https://wolt.com/en/nor/oslo/restaurant/yamazaki-sushi-wok" target="_blank"><img width="100px" src="images/wolt.png"></img></Link>
      </Alert>
      <NavigationBar value={value} setValue={setValue} />
      <Container maxWidth="md">
        <div className={classes.tabs}>
          {menuItems.map((menuItem, i) => (
            <TabPanel key={i} value={value} index={i}>
              <ItemList title={t(menuItem.title)} items={menuItem.item} />
            </TabPanel>
          ))}
        </div>
      </Container>
    </>
  )
}
