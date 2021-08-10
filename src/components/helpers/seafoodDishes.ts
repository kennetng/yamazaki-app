import { Item } from '../../api/menyApi'

import imrs from '../../imrs.jpg'

export const seafoodDishes: Item[] = [
  {
    orderNumber: 52,
    title: {
      no: 'Innbakt scampi med grønnsaker serveres med sursøtsaus',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 155,
      out: 149
    },
    allergens: ['sk', 'hv', 'fs'],
    picture: imrs
  },
  {
    orderNumber: 53,
    title: {
      no: 'Scampi og grønnsaker i krydret chilisaus',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 155
    },
    allergens: ['sk', 'fs', 'hv'],
    picture: imrs
  },
  {
    orderNumber: 56,
    title: {
      no: 'Grillet and med grønnsaker i hoisinsaus',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 189,
      out: 179
    },
    allergens: ['hv', 's'],
    picture: 'images/menu/Nr56.jpg'
  },
  {
    orderNumber: 57,
    title: {
      no: 'Szechuan and med grønnsaker',
      en: 'Spaghetti'
    },
    description: {
      no: '',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 189,
      out: 179
    },
    allergens: ['fs', 's', 'hv'],
    picture: imrs
  },
  {
    orderNumber: 60,
    title: {
      no: 'Kylling cashewnøtter',
      en: 'Spaghetti'
    },
    description: {
      no: 'Kylling med grønnsaker-cashewnøtter og østesaus',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 149,
      out: 139
    },
    allergens: ['n'],
    picture: imrs
  },
  {
    orderNumber: 63,
    title: {
      no: 'Pepper biff',
      en: 'Spaghetti'
    },
    description: {
      no: 'Grønnsaker, hvitløk og rødvin',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 159,
      out: 149
    },
    allergens: [],
    picture: 'images/menu/Nr63.jpg'
  }
]
