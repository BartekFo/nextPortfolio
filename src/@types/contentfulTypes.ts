export type ContentfulEntryType = {
  sys: object;
  total: number;
  skip: number;
  limit: number;
  items: {
    fields: {
      id: number;
      name: string;
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      url: string;
    };
  }[];
  includes: object;
};

export type FilteredDataType = {
  id: string;
  name: string;
  image: string;
  url: string;
};
