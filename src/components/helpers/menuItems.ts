import { Item } from '../../api/menyApi'
import { beefDishes } from './beefDishes'
import { chickenDishes } from './chickenDishes'
import { deepFriedMaki } from './deepFriedMaki'
import { extra } from './extra'
import { futoMaki } from './futoMaki'
import { hotDishes } from './hotDishes'
import { maki } from './maki'
import { mineralWater } from './mineralWater'
import { nigiri } from './nigiri'
import { sashimiMenu } from './sashimiMenu'
import { seafoodDishes } from './seafoodDishes'
import { starter } from './starter'
import { sushiMenu } from './sushiMenu'
import { sushiOfToday } from './sushiOfToday'

type menuItem = {
  title: string;
  item: Item[];
};

export const menuItems: menuItem[] = [
  { title: 'items.starter.title', item: starter },
  { title: 'items.sushiOfToday.title', item: sushiOfToday },
  { title: 'items.sushi.title', item: sushiMenu },
  { title: 'items.sashimi.title', item: sashimiMenu },
  { title: 'items.nigiri.title', item: nigiri },
  { title: 'items.maki.title', item: maki },
  { title: 'items.futoMaki.title', item: futoMaki },
  { title: 'items.deepFriedMaki.title', item: deepFriedMaki },
  { title: 'items.hotDishes.title', item: hotDishes },
  { title: 'items.beefDishes.title', item: beefDishes },
  { title: 'items.chickenDishes.title', item: chickenDishes },
  { title: 'items.seafoodDishes.title', item: seafoodDishes },
  { title: 'items.mineralWater.title', item: mineralWater },
  { title: 'items.extra.title', item: extra }
]
