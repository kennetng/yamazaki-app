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
    title: {
        height: 100,
        "@media (max-width:700px)":{
            height: 40,
        }
    },
    content: {
        height: 150,
        "@media (max-width:700px)":{
            height: 100,
        }
    },
    media: {
        height: 200,
    },
});

type ItemCardProps = {
    item: Item;
    hideOrderNumber?: boolean;
}

export const ItemCard: FC<ItemCardProps> = ({ item, hideOrderNumber }) => {
    const classes = useStyles();
    const language = getLanguage();

    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={item.picture}
                title="food"
            />
            <CardContent
                className={classes.title}
            >
                {
                    hideOrderNumber ?
                        <Typography gutterBottom variant="h6" component="h2">
                            {`${item.title[language]}`}
                        </Typography>
                        : <Typography gutterBottom variant="h6" component="h2">
                            {`${item.orderNumber}. ${item.title[language]}`}
                        </Typography>
                }
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
