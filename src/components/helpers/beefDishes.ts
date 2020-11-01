import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const beefDishes: Item[] = [
  {
    orderNumber: 37,
    title: {
      no: "Biff chopsuey med grønnsaker",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 145,
      out: 139,
    },
    allergens: [],
    picture: imrs,
  },
  {
    orderNumber: 38,
    title: {
      no: "Biff saté med satésaus og grønnsaker",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 149,
      out: 139,
    },
    allergens: [],
    picture: imrs,
  },
  {
    orderNumber: 39,
    title: {
      no: "Szechuan biff med grønnsaker",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 145,
      out: 138,
    },
    allergens: [],
    picture: imrs,
  },
  {
    orderNumber: 40,
    title: {
      no: "Biff med grønnsaker i peanøtter og kokosmelk",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 159,
      out: 149,
    },
    allergens: ["p"],
    picture: imrs,
  },
  {
    orderNumber: 41,
    title: {
      no: "Biff med grønnsaker I rød karri og kokosmelk",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 159,
      out: 149,
    },
    allergens: [],
    picture: imrs,
  },
  {
    orderNumber: 42,
    title: {
      no: "Biff med grønnsaker i indisk karri og kokosmelk",
      en: "Spaghetti",
    },
    description: {
      no: "",
      en: "Very good Spaghetti",
    },
    price: {
      in: 159,
      out: 149,
    },
    allergens: ["hv", "fs"],
    picture: imrs,
  },
];
