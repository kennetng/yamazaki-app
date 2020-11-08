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
import { nigiri } from "./helpers/nigiri";
import { sashimiMenu } from "./helpers/sashimiMenu";
import { starter } from "./helpers/starter";
import { sushiMenu } from "./helpers/sushiMenu";
import { sushiOfToday } from "./helpers/sushiOfToday";
import { maki } from "./helpers/maki";
import { futoMaki } from "./helpers/futoMaki";
import { deepFriedMaki } from "./helpers/deepFriedMaki";
import { hotDishes } from "./helpers/hotDishes";
import { beefDishes } from "./helpers/beefDishes";
import { chickenDishes } from "./helpers/chickenDishes";
import { seafoodDishes } from "./helpers/seafoodDishes";
import { mineralWater } from "./helpers/mineralWater";
import { extra } from "./helpers/extra";

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
        width: "100%"
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
            <Tab label={t("items.starter.title")} {...a11yProps(0)} />
            <Tab label={t("items.sushiOfToday.title")} {...a11yProps(1)} />
            <Tab label={t("items.sushi.title")} {...a11yProps(2)} />
            <Tab label={t("items.sashimi.title")} {...a11yProps(3)} />
            <Tab label={t("items.nigiri.title")} {...a11yProps(4)} />
            <Tab label={t("items.maki.title")} {...a11yProps(5)} />
            <Tab label={t("items.futoMaki.title")} {...a11yProps(6)} />
            <Tab label={t("items.deepFriedMaki.title")} {...a11yProps(7)} />
            <Tab label={t("items.hotDishes.title")} {...a11yProps(8)} />
            <Tab label={t("items.beefDishes.title")} {...a11yProps(9)} />
            <Tab label={t("items.chickenDishes.title")} {...a11yProps(10)} />
            <Tab label={t("items.seafoodDishes.title")} {...a11yProps(11)} />
            <Tab label={t("items.mineralWater.title")} {...a11yProps(12)} />
            <Tab label={t("items.extra.title")} {...a11yProps(13)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ItemList title={t("items.starter.title")} items={starter} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ItemList
            title={t("items.sushiOfToday.title")}
            items={sushiOfToday}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ItemList
            title={t("items.sushi.title")}
            items={sushiMenu}
            hideOrderNumber={true}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ItemList
            title={t("items.sashimi.title")}
            items={sashimiMenu}
            hideOrderNumber={true}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ItemList
            title={t("items.nigiri.title")}
            items={nigiri}
            hideOrderNumber={true}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <ItemList title={t("items.maki.title")} items={maki} />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <ItemList title={t("items.futoMaki.title")} items={futoMaki} />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <ItemList
            title={t("items.deepFriedMaki.title")}
            items={deepFriedMaki}
          />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <ItemList
            title={t("items.hotDishes.title")}
            subTitle={t("items.hotDishes.subTitle")}
            items={hotDishes}
          />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <ItemList
            title={t("items.beefDishes.title")}
            subTitle={t("items.beefDishes.subTitle")}
            items={beefDishes}
          />
        </TabPanel>
        <TabPanel value={value} index={10}>
          <ItemList
            title={t("items.chickenDishes.title")}
            subTitle={t("items.chickenDishes.subTitle")}
            items={chickenDishes}
          />
        </TabPanel>
        <TabPanel value={value} index={11}>
          <ItemList
            title={t("items.seafoodDishes.title")}
            items={seafoodDishes}
          />
        </TabPanel>
        <TabPanel value={value} index={12}>
          <ItemList
            title={t("items.mineralWater.title")}
            items={mineralWater}
            hideOrderNumber={true}
          />
        </TabPanel>
        <TabPanel value={value} index={13}>
          <ItemList
            title={t("items.extra.title")}
            items={extra}
            hideOrderNumber={true}
          />
        </TabPanel>
      </div>
    </Container>
  );
};
