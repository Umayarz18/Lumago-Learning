export default {
  title: 'Basic Section',
  name: 'basicSection',
  type: 'object',
  description: 'Simple Feature section for the site',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Reverse Column',
      name: 'reverseColumn',
      type: 'boolean',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
    {
      title: 'CTA Section',
      name: 'ctaSection',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Basic Text section',
        media,
      };
    },
  },
};
