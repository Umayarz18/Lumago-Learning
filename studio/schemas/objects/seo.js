// SEO object schema with title, description and image
export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      description: 'This description populates meta-tags on the webpage',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      type: 'image',

      // allows image ratio adjustment
      options: {
        hotspot: true,
      },
    },
  ],
};
