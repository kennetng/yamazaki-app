import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const sushiMenu: Item[] = [
  {
    orderNumber: 101,
    title: {
      no: "Meny 1. 8-biter",
      en: "Porridge",
    },
    description: {
      no:
        "2 laks nigiri, 1 tuna nigiri, 1 kokt scampi nigiri, 4 laks maki (avocado, agurk, purreløk, sesam)",
      en: "Very good Porridge",
    },
    price: {
      in: 105,
      out: 99,
    },
    allergens: ["f", "s", "se"],
    picture: imrs,
  },
  {
    orderNumber: 102,
    title: {
      no: "Meny 2. 10-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "3 laks nigiri, 1 tunfisk nigiri, 1 kveite nigiri, 1 kokt scampi nigiri, 4 laks maki",
      en: "Very good Spaghetti",
    },
    price: {
      in: 135,
      out: 129,
    },
    allergens: ["f", "sk", "se"],
    picture: "images/menu/Meny2.jpeg",
  },
  {
    orderNumber: 103,
    title: {
      no: "Meny 3. 15-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "5 laks nigiri, 1 tunfisk nigiri, 1 kveite nigiri, 1 kamskjell nigiri 1 kokt scampi nigiri, 6 laks maki",
      en: "Very good Spaghetti",
    },
    price: {
      in: 169,
      out: 165,
    },
    allergens: ["f", "sk", "se", "g"],
    picture: imrs,
  },
  {
    orderNumber: 104,
    title: {
      no: "Meny 4. 20-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "7 laks nigiri, 2 kamskjell nigiri, 1 kveite nigiri, 1 tuna nigiri, 1 kokt scampi nigiri, 8 tempura scampi maki (chili majones)",
      en: "Very good Spaghetti",
    },
    price: {
      in: 229,
      out: 219,
    },
    allergens: ["f", "b", "hv", "se", "g"],
    picture: "images/menu/Meny4.jpeg",
  },
  {
    orderNumber: 105,
    title: {
      no: "Meny 5. 20-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "6 laks nigiri, 2 tunfisk nigiri, 2 kokt scampi nigiri, 1 kamskjell nigiri, 1 kveite nigiri, 8 biter dragonroll maki (tempura scampi, laks, chillimajones)",
      en: "Very good Spaghetti",
    },
    price: {
      in: 235,
      out: 229,
    },
    allergens: ["f", "b", "g", "hv", "se"],
    picture: "images/menu/Meny5.jpg",
  },
  {
    orderNumber: 106,
    title: {
      no: "Meny 6. 30-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "8 laks nigiri, 2 tuna nigiri, 2 kamskjell nigiri, 2 tunfisk nigiri, 2 kokt scampi nigiri, 2 kveite nigiri, 6 biter chililaks maki, 8 biter tempura scampi maki",
      en: "Very good Spaghetti",
    },
    price: {
      in: 339,
      out: 349,
    },
    allergens: ["f", "b", "sk", "hv", "se", "g"],
    picture: "images/menu/Meny6.jpeg",
  },
  {
    orderNumber: 107,
    title: {
      no: "Party Mix 50-biter",
      en: "Spaghetti",
    },
    description: {
      no:
        "6 laks nigiri, 2 kokt scampi nigiri, 2 kveite nigiri, 2 kamskjell nigiri, 2 tunfisk nigiri, 6 laks sashimi med div. grønnsalat, avocado, 6 kamskjell futomaki, 6 black dragonmaki laks, 8 mix maki",
      en: "Very good Spaghetti",
    },
    price: {
      in: 649,
      out: 635,
    },
    allergens: ["sk", "f", "b", "hv", "g", "se"],
    picture: "images/menu/PartyMix.jpg",
  },
];
