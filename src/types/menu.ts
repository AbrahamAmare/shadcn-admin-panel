import { ReactNode } from "react";

export type MenuType = {
  group?: string;
  items: MenuItemType[];
};

export type MenuItemType = {
  text: string;
  link: string;
  icon: ReactNode;
  options?: MenuItemOptionType[];
};
export type MenuItemOptionType = {
  link: string;
  text: string;
};
