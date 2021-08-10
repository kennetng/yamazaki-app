import { Item } from '../../api/menyApi'

import imrs from '../../imrs.jpg'

export const chickenDishes: Item[] = [
  {
    orderNumber: 43,
    title: {
      no: 'Kylling chopsuey med grønnsaker',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 139,
      out: 129
    },
    allergens: [],
    picture: 'images/menu/Nr43.jpg'
  },
  {
    orderNumber: 45,
    title: {
      no: 'Kylling og grønnsaker i grønn karri og kokosmelk',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['fs'],
    picture: imrs
  },
  {
    orderNumber: 46,
    title: {
      no: 'Gong Bao',
      en: 'Spaghetti'
    },
    description: {
      no: 'Kylling og grønnsaker i en smaksfull kinesisk saus med cashewnøtter',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 159,
      out: 149
    },
    allergens: ['p', 'fs', 'hv'],
    picture: 'images/menu/Nr46.jpg'
  },
  {
    orderNumber: 47,
    title: {
      no: 'Szechuan kylling med grønnsaker',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['s', 'hv'],
    picture: 'images/menu/Nr47.jpg'
  },
  {
    orderNumber: 48,
    title: {
      no: 'Innbakt kylling og grønnsaker i sursøtsaus',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['fs', 'hv'],
    picture: imrs
  },
  {
    orderNumber: 49,
    title: {
      no: 'Kylling og grønnsaker i peanøttsaus og kokosmelk',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['p', 'fs'],
    picture: imrs
  },
  {
    orderNumber: 50,
    title: {
      no: 'Kylling og grønnsaker i rød karri og kokosmelk',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['f', 's'],
    picture: imrs
  }
]
