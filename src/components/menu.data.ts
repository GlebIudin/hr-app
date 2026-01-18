import { PAGES } from "../config/pages.config";

export interface IMenuItem {
  href: string;
  name: string;
}

export const MENU = [
  { href: PAGES.HOME, name: "Домашная страница" },
  { href: PAGES.ADVICE, name: "HR рекомендация" },
];
