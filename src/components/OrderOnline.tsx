import React from "react"
import { Container, makeStyles, createStyles, Theme } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import { ItemCard } from "./ItemCard";
import { menuItems } from "./helpers/MenuItemsData";
import { Item } from "../api/menyApi";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "54px",
        }
    }),
);
export const OrderOnline = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                {
                    menuItems.map(
                        (item: Item) =>
                            <Grid item xs={6}>
                                <ItemCard item={item} />
                            </Grid>
                    )
                }
            </Grid>
        </Container>
    );
}
