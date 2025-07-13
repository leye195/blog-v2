export type PageProps = {
  params: Promise<{
    [key: string]: string;
  }>;
};

export type Data<T> = {
  data: T;
};
