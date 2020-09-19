import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const starterItems: Item[] = [
  {
    id: 1,
    title: {
      no: "Suppe",
      en: "Soup",
    },
    description: {
      en: "Very good soup",
      no: "Veldig good suppe",
    },
    price: {
      in: 56.5,
      out: 5612.2,
    },
    allergens: ["sdasd"],
    picture: imrs,
  },
  {
    id: 2,
    title: {
      no: "Grøt",
      en: "Porridge",
    },
    description: {
      en: "Very good Porridge",
      no: "Veldig good grøt",
    },
    price: {
      in: 56.5,
      out: 5612.2,
    },
    allergens: ["sdasd"],
    picture: imrs,
  },
  {
    id: 3,
    title: {
      no: "Spagetti",
      en: "Spaghetti",
    },
    description: {
      no: "Veldig good Spagetti",
      en: "Very good Spaghetti",
    },
    price: {
      in: 33.5,
      out: 21.2,
    },
    allergens: ["sdasd"],
    picture: imrs,
  },
  {
    id: 4,
    title: {
      no: "Fisk",
      en: "Fish",
    },
    description: {
      en: "Very good fish",
      no: "Veldig good fisk",
    },
    price: {
      in: 56.5,
      out: 5612.2,
    },
    allergens: ["sdasd"],
    picture: imrs,
  },
];

export const menuItems = [...starterItems];
