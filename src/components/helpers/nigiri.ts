import { Item } from '../../api/menyApi'

import imrs from '../../imrs.jpg'

export const nigiri: Item[] = [
  {
    orderNumber: 110,
    title: {
      no: 'Klasse 1',
      en: 'Spaghetti'
    },
    description: {
      no: 'Laks, crabstick, avocado',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 30,
      out: 30
    },
    allergens: [],
    picture: imrs
  },
  {
    orderNumber: 110,
    title: {
      no: 'Klasse 2',
      en: 'Spaghetti'
    },
    description: {
      no: 'Tuna, kamskjell, scampi, kveite',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 34,
      out: 34
    },
    allergens: [],
    picture: imrs
  }
]
