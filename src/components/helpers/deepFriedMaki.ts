import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const deepFriedMaki: Item[] = [
  {
    orderNumber: 31,
    title: {
      no: "Frityrstekt scampi maki 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Scampi, kimchi, chilimajones, avocado",
      en: "Very good Spaghetti",
    },
    price: {
      in: 95,
      out: 89,
    },
    allergens: ["sk", "hv", "se"],
    picture: imrs,
  },
  {
    orderNumber: 32,
    title: {
      no: "Frityrstekt laks maki 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Laks, kimchi, chilimajones, avocado, purreløk",
      en: "Very good Spaghetti",
    },
    price: {
      in: 95,
      out: 89,
    },
    allergens: ["hv", "f", "g"],
    picture: imrs,
  },
  {
    orderNumber: 33,
    title: {
      no: "Frityrstekt and 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "And, kimchi, avocado, purreløk, chilimajones",
      en: "Very good Spaghetti",
    },
    price: {
      in: 105,
      out: 99,
    },
    allergens: ["hv", "se"],
    picture: imrs,
  },
];
