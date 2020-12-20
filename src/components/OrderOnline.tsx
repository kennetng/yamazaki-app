import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  makeStyles,
  createStyles,
  AppBar,
  Tab,
  Tabs,
} from "@material-ui/core";

import { ItemList } from "./ItemList";
import { menuItems } from "./helpers/menuItems";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() =>
  createStyles({
    tabs: {
      flexGrow: 1,
      width: "100%",
    },
    appBar: {
      width: "100%",
    },
    title: {
      paddingBottom: "40px",
    },
  })
);

export const OrderOnline = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <div className={classes.tabs}>
        <AppBar className={classes.appBar} position="static" color="default">
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
              <Tab label={t(menuItem.title)} {...a11yProps(i)} />
            ))}
          </Tabs>
        </AppBar>
        {menuItems.map((menuItem, i) => (
          <TabPanel value={value} index={i}>
            <ItemList title={t(menuItem.title)} items={menuItem.item} />
          </TabPanel>
        ))}
      </div>
    </Container>
  );
};
