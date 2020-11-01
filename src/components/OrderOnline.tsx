import React from "react"
import { useTranslation } from "react-i18next";
import { Container, makeStyles, createStyles } from "@material-ui/core";

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

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: "54px",
        },
        title: {
            paddingBottom: "40px"
        }
    }),
);

export const OrderOnline = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <ItemList title={t('items.starter.title')} items={starter} />
            <ItemList title={t('items.sushiOfToday.title')} items={sushiOfToday} />
            <ItemList title={t('items.sushi.title')} items={sushiMenu} hideOrderNumber={true} />
            <ItemList title={t('items.sashimi.title')} items={sashimiMenu} hideOrderNumber={true} />
            <ItemList title={t('items.nigiri.title')} items={nigiri} hideOrderNumber={true} />
            <ItemList title={t('items.maki.title')} items={maki} />
            <ItemList title={t('items.futoMaki.title')} items={futoMaki} />
            <ItemList title={t('items.deepFriedMaki.title')} items={deepFriedMaki} />
            <ItemList title={t('items.hotDishes.title')} subTitle={t('items.hotDishes.subTitle')} items={hotDishes} />
            <ItemList title={t('items.beefDishes.title')} subTitle={t('items.beefDishes.subTitle')} items={beefDishes} />
            <ItemList title={t('items.chickenDishes.title')} subTitle={t('items.chickenDishes.subTitle')} items={chickenDishes} />
            <ItemList title={t('items.seafoodDishes.title')} items={seafoodDishes} />
            <ItemList title={t('items.mineralWater.title')} items={mineralWater} hideOrderNumber={true} />
            <ItemList title={t('items.extra.title')} items={extra} hideOrderNumber={true} />
        </Container>
    );
}
