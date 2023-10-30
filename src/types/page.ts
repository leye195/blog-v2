import { notionDBRowStructed as Posts } from "./notion";

export type PageProps = {
  params: {
    [key: string]: string;
  };
};

export type Data<T> = {
  data: T;
};
