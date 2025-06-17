import { ComponentType } from "react";
import { IconProps } from "./icons";

export type FooterLinkType = {
  id: number;
  name: string;
  href: string;
}

export type MenuLinkType = {
  id: number;
  name: string;
  href: string;
  icon: ComponentType<IconProps>;
  description: string;
}

export type ChannelsDataType = {
  id: number,
  path: string,
  alt: string;
  position: string;
  positionClassName: string;
}

export type FilterType = {
  id: number;
  name: string;
  query: string
}