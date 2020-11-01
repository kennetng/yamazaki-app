import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const hotDishes: Item[] = [
  {
    orderNumber: 34,
    title: {
      no: "Pad Thai",
      en: "Spaghetti",
    },
    description: {
      no: "Thailandske stekte nudler med kylling, scampi, egg, bønnespirer serveres med sitron, sprøstekt løk",
      en: "Very good Spaghetti",
    },
    price: {
      in: 145,
      out: 139,
    },
    allergens: ["e", "sk", "p"],
    picture: imrs,
  },
  {
    orderNumber: 35,
    title: {
      no: "Stekt ris",
      en: "Spaghetti",
    },
    description: {
      no: "Scampi, kylling, egg, erter, mais, gullrøtter",
      en: "Very good Spaghetti",
    },
    price: {
      in: 125,
      out: 119,
    },
    allergens: ["s", "e", "g"],
    picture: imrs,
  },
  {
    orderNumber: 36,
    title: {
      no: "Stekte nudler",
      en: "Spaghetti",
    },
    description: {
      no: "Husets stekte eggnudler med grønnsaker, Velg mellom biff/ kylling eller sjømat (scampi, kamskjell, crabstick)",
      en: "Very good Spaghetti",
    },
    price: {
      in: 135,
      out: 129,
    },
    allergens: ["e", "sk", "b", "hv"],
    picture: imrs,
  },
];
