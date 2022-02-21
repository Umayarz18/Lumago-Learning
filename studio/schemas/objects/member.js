export default {
  title: 'Team Member',
  name: 'member',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Professional Headshot',
      name: 'image',
      type: 'mainImage',
    },
    {
      name: 'description',
      title: 'Member Description',
      type: 'text',
    },
    {
      title: 'Social Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Social Provider',
              name: 'socialProvider',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'socialLink',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
};
