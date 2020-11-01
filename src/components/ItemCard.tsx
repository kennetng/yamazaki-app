import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';

import { getLanguage } from "../locale/i18n";
import { Item } from '../api/menyApi';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    title: {
        height: 100,
    },
    content: {
        height: 150,
    },
    media: {
        height: 200,
    },
});

type ItemCardProps = {
    item: Item
}

export const ItemCard: FC<ItemCardProps> = ({ item }) => {
    const classes = useStyles();
    const language = getLanguage();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={item.picture}
                title="food"
            />
            <CardContent
                className={classes.title}
            >
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title[language]}
                </Typography>
            </CardContent>
            <CardContent
                className={classes.content}
            >
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description[language]}
                </Typography>
            </CardContent>
            <CardActions>
                <Chip label={`${item.price.out},-`} />
                <Chip label={`${item.price.in},-`} />
            </CardActions>
        </Card>
    );
}
