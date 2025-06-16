import { JSX } from "react";

export type FooterLinkType = {
  id: number;
  name: string;
  href: string;
}

export type MenuLinkType = {
  id: number;
  name: string;
  href: string;
  icon: (props: { width: number; height: number }) => JSX.Element;
  description: string;
}