import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Chip } from '@material-ui/core'

import { getLanguage } from '../locale/i18n'
import { Item } from '../api/menyApi'

const useStyles = makeStyles({
  title: {
    height: 100,
    '@media (max-width:700px)': {
      height: 40
    }
  },
  content: {
    height: 200,
    '@media (max-width:700px)': {
      height: 150
    }
  },
  media: {
    height: 200
  }
})

type ItemCardProps = {
  item: Item;
  hideOrderNumber?: boolean;
}

export const ItemCard = ({ item, hideOrderNumber }: ItemCardProps) => {
  const classes = useStyles()
  const language = getLanguage()
  const { picture, title, orderNumber, description, price, allergens } = item
  const titleWithOrderNumber = `${orderNumber < 100 ? `${orderNumber}.` : ''} ${title[language]}`
  console.log('allergens', allergens)
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={picture}
        title="food"
      />
      <CardContent
        className={classes.title}
      >
        {
          hideOrderNumber
            ? <Typography gutterBottom variant="h6" component="h2">
              {`${title[language]}`}
            </Typography>
            : <Typography gutterBottom variant="h6" component="h2">
              {titleWithOrderNumber}
            </Typography>
        }
      </CardContent>
      <CardContent
        className={classes.content}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {description[language]}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {`(${allergens.join(' - ')})`}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label={`${price.out},-`} />
        <Chip label={`${price.in},-`} />
      </CardActions>
    </Card>
  )
}
