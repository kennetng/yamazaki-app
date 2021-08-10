import { Item } from '../../api/menyApi'

import imrs from '../../imrs.jpg'

export const beefDishes: Item[] = [
  {
    orderNumber: 37,
    title: {
      no: 'Biff chopsuey med grønnsaker',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 145,
      out: 139
    },
    allergens: [],
    picture: imrs
  },
  {
    orderNumber: 39,
    title: {
      no: 'Szechuan biff med grønnsaker',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 145,
      out: 138
    },
    allergens: [],
    picture: imrs
  }
]
