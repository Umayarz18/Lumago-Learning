import React from 'react';
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    );
  },
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'seoContent',
      type: 'seo',
      title: 'SEO content',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'heroSection' },
        { type: 'basicSection' },
        { type: 'featureSection' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'seoContent.title',
      media: 'openGraphImage',
    },
    prepare({ title, media }) {
      const endMedia = media ? (
        media
      ) : (
        <span
          style={{
            fontSize: '1.5rem',
            backgroundColor: '#ffd9da',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem',
          }}
        >
          <p>📝</p>
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
