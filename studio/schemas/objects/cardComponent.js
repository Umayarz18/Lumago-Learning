import React from 'react';
export default {
  title: 'Card Component',
  name: 'cardComponent',
  type: 'object',

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
      const endMedia = media ? (
        media
      ) : (
        <span
          style={{
            fontSize: '1.5rem',
            backgroundColor: '#2c497f',
            width: '4rem',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem',
          }}
        >
          <p>📇</p>
        </span>
      );
      return {
        title,
        subtitle: 'Feature section',
        media: endMedia,
      };
    },
  },
};
