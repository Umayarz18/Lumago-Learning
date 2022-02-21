import React from 'react';
import lecture from './module';
import activity from './activity';
import blockContent from '../objects/blockContent';
import bodyPortableText from '../objects/bodyPortableText';
export default {
  title: 'Course',
  icon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    );
  },
  name: 'course', //identifier for the api
  type: 'document',
  //Fields inside the document
  fields: [
    {
      title: 'Course Name',
      name: 'course_name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
    },
    {
      title: 'Emoji',
      name: 'emoji',
      type: 'string',
    },
    {
      title: 'Course Description',
      name: 'course_description',
      type: 'bodyPortableText',
    },
    {
      title: 'Course Objectives',
      name: 'course_objectives',
      type: 'array',
      of: [
        {
          title: 'Objective',
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            );
          },
          fields: [
            {
              title: 'Objective Name',
              name: 'objective_name',
              type: 'string',
            },
            {
              title: 'Objective Description',
              name: 'objective_description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Lectures',
      name: 'lectures',
      description:
        'The previous setup of course content. Please ignore for the time being.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'lecture' }, { type: 'activity' }],
        },
      ],
    },

    {
      title: 'Modules',
      name: 'module',
      description: 'Use this module system to link content to a course.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'module' },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'course_name',
      status: 'emoji',
      color: 'color.hex',
    },
    prepare({ title, status, color }) {
      return {
        title: title,
        media: (
          <span
            style={{
              fontSize: '1.5rem',
              backgroundColor: color,
              width: '4rem',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
            }}
          >
            <p>{status ? status : '🎫'}</p>
          </span>
        ),
      };
    },
  },
};
