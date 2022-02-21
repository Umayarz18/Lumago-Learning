import React from 'react';
import lecture from './lecture';
import activity from './activity';
import blockContent from '../objects/blockContent';
import bodyPortableText from '../objects/bodyPortableText';
import mainImage from '../objects/mainImage';
export default {
  title: 'Module',
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
  name: 'module', //identifier for the api
  type: 'document',

  //Fields inside the document
  fields: [
    {
      title: 'Module Name',
      name: 'module_name',
      type: 'string',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
    {
      title: 'Emoji',
      name: 'emoji',
      description:
        'Pick an emoji that fits the theme of the module using https://getemoji.com/',
      type: 'string',
    },
    {
      title: 'Module Description',
      name: 'course_description',
      type: 'bodyPortableText',
    },
    {
      title: 'Course Source',
      name: 'course_source',
      type: 'reference',
      to: [{ type: 'course' }],
    },
    {
      title: 'Tasks',
      name: 'tasks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'lecture' }, { type: 'activity' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'module_name',
      courseSource: 'course_source.course_name',
      status: 'emoji',
      color: 'color.hex',
    },
    prepare({ title, courseSource, status, color }) {
      return {
        title: title,
        subtitle: `Module belongs to ${courseSource} course`,
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
