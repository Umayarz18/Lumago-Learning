import React from 'react';

export default {
  title: 'Question',
  name: 'question',
  type: 'object',
  icon: () => {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
        />
      </svg>
    );
  },
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'array',
      description: 'Select the different types this questions can take on.',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Multiple Choice', value: 'MC' },
          { title: 'Fill in the Blank', value: 'FITB' },
          { title: 'Open Response', value: 'OR' },
        ],
      },
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'string',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
