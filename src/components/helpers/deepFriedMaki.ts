import { Item } from '../../api/menyApi'

export const deepFriedMaki: Item[] = [
  {
    orderNumber: 31,
    title: {
      no: 'Frityrstekt scampi maki 6 biter',
      en: 'Spaghetti'
    },
    description: {
      no: 'Scampi, kimchi, chilimajones, avocado',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 95,
      out: 89
    },
    allergens: ['sk', 'hv', 'se'],
    picture: 'images/menu/Nr31.jpg'
  },
  {
    orderNumber: 32,
    title: {
      no: 'Frityrstekt laks maki 6 biter',
      en: 'Spaghetti'
    },
    description: {
      no: 'Laks, kimchi, chilimajones, avocado, purreløk',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 95,
      out: 89
    },
    allergens: ['hv', 'f', 'g'],
    picture: 'images/menu/Nr32.jpg'
  },
  {
    orderNumber: 33,
    title: {
      no: 'Frityrstekt and 6 biter',
      en: 'Spaghetti'
    },
    description: {
      no: 'And, kimchi, avocado, purreløk, chilimajones',
      en: 'Very good Spaghetti'
    },
    price: {
      in: 105,
      out: 99
    },
    allergens: ['hv', 'se'],
    picture: 'images/menu/Nr33.jpeg'
  }
]
