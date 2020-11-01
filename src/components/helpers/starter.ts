import { Item } from "../../api/menyApi";

import imrs from "../../imrs.jpg";

export const starter: Item[] = [
  {
    orderNumber: 1,
    title: {
      no: "Miso suppe",
      en: "Soup",
    },
    description: {
      no: "Japansk suppe med kamskjell, sjøtang, tofu og sesam",
      en: "Very good soup",
    },
    price: {
      in: 55,
      out: 50,
    },
    allergens: ["f", "S"],
    picture: imrs,
  },
  {
    orderNumber: 2,
    title: {
      no: "Fritert Vårrulle 2 stk",
      en: "Porridge",
    },
    description: {
      no: "Kvernet svinekjøtt med scampi og grønnsaker, serveres med chilisaus",
      en: "Very good Porridge",
    },
    price: {
      in: 69,
      out: 65,
    },
    allergens: ["b", "hv"],
    picture: imrs,
  },
  {
    orderNumber: 3,
    title: {
      no: " Ferske Vårruller 2 stk",
      en: "Spaghetti",
    },
    description: {
      no: "Scampi, kylling og risnudler serveres med chilisaus",
      en: "Very good Spaghetti",
    },
    price: {
      in: 69,
      out: 65,
    },
    allergens: ["sk", "hv"],
    picture: imrs,
  },
  {
    orderNumber: 4,
    title: {
      no: "Innbakt scampi 4 stk",
      en: "Fish",
    },
    description: {
      no: "Innbakt scampi serveres med chilisaus",
      en: "Very good fish",
    },
    price: {
      in: 75,
      out: 69,
    },
    allergens: ["b", "hv"],
    picture: imrs,
  },
  {
    orderNumber: 5,
    title: {
      no: "Tom jam kung 3 stk",
      en: "Soup",
    },
    description: {
      no:
        "En berømt Thailandsk middels sterk og syrlig scampi suppe med chili, sitron og koriander",
      en: "Very good soup",
    },
    price: {
      in: 79,
      out: 75,
    },
    allergens: ["sk"],
    picture: imrs,
  },
  {
    orderNumber: 6,
    title: {
      no: "Tom kha kai",
      en: "Porridge",
    },
    description: {
      no: "Kvernet svinekjøtt med scampi og grønnsaker, serveres med chilisaus",
      en: "Very good Porridge",
    },
    price: {
      in: 79,
      out: 75,
    },
    allergens: ["m", "f"],
    picture: imrs,
  },
  {
    orderNumber: 7,
    title: {
      no: "Wonton suppe 5 stk",
      en: "Spaghetti",
    },
    description: {
      no: "Kvernet svinekjøtt og scampi med vårløk og koriander",
      en: "Very good Spaghetti",
    },
    price: {
      in: 79,
      out: 75,
    },
    allergens: ["hv", "sk", "e", "m"],
    picture: imrs,
  },
];