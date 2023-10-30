export type Tag = {
  id: string;
  name: string;
};

export type notionDBRowStructed = {
  id: string;
  name: string;
  date: string;
  tag: Tag[];
  url: string;
};

export type notionPage = {
  data: string;
};
