import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const maki: Item[] = [
  {
    orderNumber: 11,
    title: {
      no: "Vegetar maki",
      en: "Spaghetti",
    },
    description: {
      no: "Avocado, agurk, purreløk med sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 65,
      out: 60,
    },
    allergens: ["se"],
    picture: imrs,
  },
  {
    orderNumber: 12,
    title: {
      no: "Laks maki",
      en: "Spaghetti",
    },
    description: {
      no: "Laks med avocado og sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 69,
      out: 65,
    },
    allergens: ["f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 13,
    title: {
      no: "California maki",
      en: "Spaghetti",
    },
    description: {
      no: "Crabstick med avocado-sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 69,
      out: 65,
    },
    allergens: ["f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 14,
    title: {
      no: "Spicy tuna maki",
      en: "Spaghetti",
    },
    description: {
      no: "Tunfisk med kimchi og sesamfrø",
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
    orderNumber: 15,
    title: {
      no: "Philadelphia laks",
      en: "Spaghetti",
    },
    description: {
      no: "Avocado, agurk, purreløk og philadelphia ost",
      en: "Very good Spaghetti",
    },
    price: {
      in: 89,
      out: 85,
    },
    allergens: ["f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 16,
    title: {
      no: "Tempura scampi maki",
      en: "Spaghetti",
    },
    description: {
      no: "Innbakt scampi med avocado, chilimajones, sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 85,
      out: 79,
    },
    allergens: ["sk", "hv", "g"],
    picture: imrs,
  },
  {
    orderNumber: 17,
    title: {
      no: "Tempura kylling maki",
      en: "Spaghetti",
    },
    description: {
      no: "Innbakt kylling, avocado, sesamfrø, chilimajones",
      en: "Very good Spaghetti",
    },
    price: {
      in: 85,
      out: 79,
    },
    allergens: ["s", "se"],
    picture: imrs,
  },
  {
    orderNumber: 18,
    title: {
      no: "Tempura duck maki",
      en: "Spaghetti",
    },
    description: {
      no: "Innbakt and, avocado, agurk, purreløk, chilimajones",
      en: "Very good Spaghetti",
    },
    price: {
      in: 109,
      out: 99,
    },
    allergens: ["hv", "se"],
    picture: imrs,
  },
  {
    orderNumber: 19,
    title: {
      no: "Majones kingcrab maki",
      en: "Spaghetti",
    },
    description: {
      no: "Kongekrabbe ,tobikorogn, chilimajones, avocado, agurk",
      en: "Very good Spaghetti",
    },
    price: {
      in: 109,
      out: 99,
    },
    allergens: ["sk", "se"],
    picture: imrs,
  },
  {
    orderNumber: 20,
    title: {
      no: "Scallop fusion maki ",
      en: "Spaghetti",
    },
    description: {
      no: "Kongekrabbe ,tobikorogn, chilimajones, avocado, agurk",
      en: "Very good Spaghetti",
    },
    price: {
      in: 105,
      out: 95,
    },
    allergens: ["b", "s", "se", "g"],
    picture: imrs,
  },
  {
    orderNumber: 21,
    title: {
      no: "Mango maki",
      en: "Spaghetti",
    },
    description: {
      no:
        "Innbakt laks, philadelphia ost, avocado, agurk, mango med terriyaki saus, sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 129,
      out: 119,
    },
    allergens: ["f", "g", "se"],
    picture: imrs,
  },
  {
    orderNumber: 22,
    title: {
      no: "Tempura avocado",
      en: "Spaghetti",
    },
    description: {
      no: "Tempura scampi, avocado, agurk, purreløk, lakserogn, chilimajones",
      en: "Very good Spaghetti",
    },
    price: {
      in: 125,
      out: 119,
    },
    allergens: ["sk", "f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 23,
    title: {
      no: "Dragonroll maki",
      en: "Spaghetti",
    },
    description: {
      no:
        "Tempura scampi, laks, philadelphia ost, avocado, agurk, terriyakisaus, chilimajones, sesamfrø",
      en: "Very good Spaghetti",
    },
    price: {
      in: 135,
      out: 129,
    },
    allergens: ["sk", "b", "g", "f", "se"],
    picture: imrs,
  },
  {
    orderNumber: 24,
    title: {
      no: "Black dragon maki",
      en: "Spaghetti",
    },
    description: {
      no: "Tunfisk, kokt scampi, kimchi. Avocado, blåber, pistasje saus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 129,
      out: 125,
    },
    allergens: ["sk", "f", "hv", "se"],
    picture: imrs,
  },
  {
    orderNumber: 25,
    title: {
      no: "Kamskjell maki",
      en: "Spaghetti",
    },
    description: {
      no:
        "Innbakt scampi, kokt scampi, kamskjell, avocado, philadelphia, ost, tobikorogn, pistasjesaus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 149,
      out: 145,
    },
    allergens: ["hv", "f", "b", "g", "sk", "se"],
    picture: imrs,
  },
];
