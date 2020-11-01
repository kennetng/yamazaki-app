import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const futoMaki: Item[] = [
  {
    orderNumber: 26,
    title: {
      no: "Tempura softshellcrab 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Innbakt softshellcrab med kimchi, avocad",
      en: "Very good Spaghetti",
    },
    price: {
      in: 99,
      out: 95,
    },
    allergens: ["sk", "se", "hv"],
    picture: imrs,
  },
  {
    orderNumber: 27,
    title: {
      no: "Tempura kingcrab 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Innbakt kingcrab med kimchi, avocado",
      en: "Very good Spaghetti",
    },
    price: {
      in: 105,
      out: 95,
    },
    allergens: ["hv", "sk", "se"],
    picture: imrs,
  },
  {
    orderNumber: 28,
    title: {
      no: "Chililaks laks 6 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Purreløk, avocado, agurk, kimchi, sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 79,
      out: 75,
    },
    allergens: ["f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 29,
    title: {
      no: "Futo spesial 8 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Laks, tunfisk, kokt scampi, avocado, tobikorogn, terriyakisaus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 119,
      out: 109,
    },
    allergens: ["f", "sk", "b", "g", "se"],
    picture: imrs,
  },
  {
    orderNumber: 30,
    title: {
      no: " Futo tempura spesial 12 biter",
      en: "Spaghetti",
    },
    description: {
      no: "Tempura scampi, laks, avocado, agurk, tobikorogn og terriyakisaus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 165,
      out: 159,
    },
    allergens: ["hv", "sk", "f", "se"],
    picture: "images/menu/Nr30.jpg",
  },
];
