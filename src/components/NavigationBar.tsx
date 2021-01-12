import React from 'react'
import { useTranslation } from 'react-i18next'
import { AppBar, Tab, Tabs } from '@material-ui/core'
import { menuItems } from './helpers/menuItems'

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  }
}

type NavigationBarProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const NavigationBar = ({ value, setValue }: NavigationBarProps) => {
  const { t } = useTranslation()
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <AppBar
      color="default">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {menuItems.map((menuItem, i) => (
          <Tab href="#menu" key={i} label={t(menuItem.title)} {...a11yProps(i)} />
        ))}
      </Tabs>
    </AppBar>
  )
}
