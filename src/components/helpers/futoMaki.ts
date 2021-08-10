import { Item } from '../../api/menyApi'

import imrs from '../../imrs.jpg'

export const futoMaki: Item[] = [
  {
    orderNumber: 28,
    title: {
      no: 'Chililaks laks 6 biter',
      en: 'Spaghetti'
    },
    description: {
      no: 'Purreløk, avocado, agurk, kimchi, sesamfrø',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 79,
      out: 75
    },
    allergens: ['f', 'se'],
    picture: imrs
  },
  {
    orderNumber: 30,
    title: {
      no: ' Futo tempura spesial 12 biter',
      en: 'Spaghetti'
    },
    description: {
      no: 'Tempura scampi, laks, avocado, agurk, tobikorogn og terriyakisaus',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 165,
      out: 159
    },
    allergens: ['hv', 'sk', 'f', 'se'],
    picture: 'images/menu/Nr30.jpg'
  }
]
