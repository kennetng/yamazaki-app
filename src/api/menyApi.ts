import { fetcher } from "./apiHelper";
import useSWR from "swr";

export const baseUrl = "http://161.35.84.11";

export interface Item {
  orderNumber: number;
  title: { [key: string]: string };
  description: { [key: string]: string };
  price: {
    in: number;
    out: number;
  };
  allergens: string[];
  picture: any;
}

export function useItems() {
  return useSWR(`${baseUrl}/items`, fetcher);
}
