export type Tag = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  name: string;
  tag: Tag[];
  date: string;
  url: string;
};

export type notionPage = {
  data: string;
};

export type RowType = {
  id: string;
  name: {
    id: string;
    title: [
      {
        text: { content: string };
      }
    ];
  };
  tag: {
    id: string;
    name: string;
  }[];
  date: {
    id: string;
    date: {
      start: string;
    };
  };
  url: string;
};
