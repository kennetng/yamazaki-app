import React, { FC } from "react";
import { Typography, Grid, makeStyles, createStyles, useMediaQuery, Container } from "@material-ui/core";

import { ItemCard } from "./ItemCard";
import { Item } from "../api/menyApi";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "40px",
            marginTop: "40px"
        },
        mediaCard:{
            maxWidth: "100%",
            width: "100%",
        }
    }),
);

interface ItemListProps {
    title: string;
    subTitle?: string;
    items: Item[];
    hideOrderNumber?: boolean;
}

export const ItemList: FC<ItemListProps> = ({ title, subTitle, items, hideOrderNumber }) => {
    const classes = useStyles();
    const isNarrowWidth = useMediaQuery('(max-width:700px)')

    return (
        <>
            <Container className={classes.title}>
                <Typography variant="h3" component="h2">
                    {title}
                </Typography>
                {subTitle && <Typography variant="h4" component="h3">
                    {subTitle}
                </Typography>}
            </Container>
            <Grid
                container
                spacing={2}
                direction={isNarrowWidth ? 'column' : 'row'}
                justify="flex-start"
                alignItems={isNarrowWidth ? 'center' : 'flex-start'}
            >
                {
                    items.map(
                        (item: Item) =>
                            <Grid className={classes.mediaCard} item xs={isNarrowWidth ? 6 : 3} >
                                <ItemCard item={item} hideOrderNumber={hideOrderNumber}/>
                            </Grid>
                    )
                }
            </Grid>
        </>)
} 