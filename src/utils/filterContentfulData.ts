import { ContentfulEntryType } from '@root/@types/contentfulTypes';

const filterContentfulData = (data: ContentfulEntryType) => {
  const fields = data.items.map((item) => item.fields);
  return fields.map((field) => {
    return {
      id: field.id,
      name: field.name,
      image: `http:${field.image.fields.file.url}`,
      url: field.url,
    };
  });
};

export default filterContentfulData;
