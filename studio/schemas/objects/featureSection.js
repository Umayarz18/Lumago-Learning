import React from 'react';
export default {
  title: 'Feature Section',
  name: 'featureSection',
  type: 'object',
  description: 'Display an array of content',
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.posts ||
        !fields.cards ||
        'Only one type of objects are possible'
    ),
  fieldsets: [
    {
      title: 'Array Items',
      name: 'arrayItems',
      description: 'Select only one of the options to list features',
    },
  ],
  fields: [
    {
      title: 'Section Title',
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
      title: 'In-House Objects',
      description:
        'Use this to list specific objects. Currently supports featured posts',
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      fieldset: 'arrayItems',
    },
    {
      title: 'Cards List',
      name: 'cards',
      type: 'array',
      of: [{ type: 'cardComponent' }, { type: 'member' }],
      fieldset: 'arrayItems',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Feature section',
        media: (
          <span
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#D0BCD5',
              width: '4rem',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
            }}
          >
            <p>🎉</p>
          </span>
        ),
      };
    },
  },
};
