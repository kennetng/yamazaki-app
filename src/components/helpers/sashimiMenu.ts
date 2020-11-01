import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const sashimiMenu: Item[] = [
  {
    orderNumber: 108,
    title: {
      no: "Liten sashimi 10 skiver",
      en: "Spaghetti",
    },
    description: {
      no:
        "4 laks, 2 kveite, 2 tunfisk, 1 scampi, kamskjell serveres med ris og ponzu saus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 160,
      out: 155,
    },
    allergens: ["f", "sk"],
    picture: imrs,
  },
  {
    orderNumber: 109,
    title: {
      no: "Medium sashimi 15 skiver",
      en: "Spaghetti",
    },
    description: {
      no:
        "4 laks, 2 kveite, 2 tunfisk, 1 scampi, kamskjell serveres med ris og ponzu saus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 239,
      out: 230,
    },
    allergens: ["f", "b", "sk"],
    picture: imrs,
  },
];
