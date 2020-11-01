import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const sushiOfToday: Item[] = [
  {
    orderNumber: 8,
    title: {
      no: "12 biter",
      en: "Porridge",
    },
    description: {
      no: "3 laks nigiri, 1 scampi nigiri, 8 laks maki (avocado, agurk)",
      en: "Very good Porridge",
    },
    price: {
      in: 125,
      out: 119,
    },
    allergens: ["f", "b", "se", "s"],
    picture: imrs,
  },
  {
    orderNumber: 9,
    title: {
      no: "14 biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "4 laks nigiri, 1 tunfisk/kveite nigiri, 1 scampi nigiri, 4 innbakt laks futo maki (avocado, purreløk, kimchi), 4 laks maki",
      en: "Very good Spaghetti",
    },
    price: {
      in: 135,
      out: 129,
    },
    allergens: ["f", "b", "se", "s"],
    picture: imrs,
  },
  {
    orderNumber: 10,
    title: {
      no: "Yamazaki dagens 14 biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "6 innbakt laks futo maki (kimchi,sesamfrø,avocado, purreløk) 8 laks maki ( laks, avocado)",
      en: "Very good Spaghetti",
    },
    price: {
      in: 135,
      out: 129,
    },
    allergens: ["f", "hv", "se"],
    picture: imrs,
  },
];
