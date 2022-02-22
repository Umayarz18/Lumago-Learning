export default {
  type: 'object',
  name: 'heroSection',
  title: 'Hero Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'array',
      of: [
        {
          type: 'block',
          // Only allow these block styles
          styles: [{ title: 'Normal', value: 'normal' }],
          // Only allow numbered lists
          lists: [],
          marks: {
            // Only allow these decorators
            decorators: [],
            // Support annotating text with a reference to an author
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'isColumn',
      type: 'boolean',
      title: 'Is a Column Hero',
    },
    {
      title: 'Reverse Column',
      name: 'reverseColumn',
      type: 'boolean',
    },
    {
      name: 'backgroundImage',
      type: 'mainImage',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      };
    },
  },
};
