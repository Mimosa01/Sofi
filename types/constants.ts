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

export type VacancyType = {
  id: number;
  active: boolean,
  external_id: string,
  company_name: string,
  title: string,
  salary: string,
  location: string,
  speciality: string,
  internship: boolean,
  remote: boolean,
  url: string,
  description: string,
  source: string,
  image: string,
  date_publication: string;
}

export type QuestionType = {
  id: number,
  stack: string,
  question: string,
  position: string,
  freq: number,
  answer: string,
  tags: string
}

export type SearchParamsType = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type PropsPage<T> = {
  speciality: string;
  seoTagsList: FilterType[];
  data: T[];
  totalPages: number;
}

export type ResponceType<T> = {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}