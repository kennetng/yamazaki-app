import { beefDishes } from "./beefDishes";
import { chickenDishes } from "./chickenDishes";
import { deepFriedMaki } from "./deepFriedMaki";
import { extra } from "./extra";
import { futoMaki } from "./futoMaki";
import { hotDishes } from "./hotDishes";
import { maki } from "./maki";
import { mineralWater } from "./mineralWater";
import { nigiri } from "./nigiri";
import { sashimiMenu } from "./sashimiMenu";
import { seafoodDishes } from "./seafoodDishes";
import { starter } from "./starter";
import { sushiMenu } from "./sushiMenu";
import { sushiOfToday } from "./sushiOfToday";

export const menuItems = [
  ...starter,
  ...sushiOfToday,
  ...sushiMenu,
  ...sashimiMenu,
  ...nigiri,
  ...maki,
  ...futoMaki,
  ...deepFriedMaki,
  ...hotDishes,
  ...beefDishes,
  ...chickenDishes,
  ...seafoodDishes,
  ...mineralWater,
  ...extra,
];
