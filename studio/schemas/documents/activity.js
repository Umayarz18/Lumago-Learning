import bioPortableText from '../objects/bioPortableText';
import React from 'react';

export default {
  title: 'Activity',
  name: 'activity', //identifier for the api
  type: 'document',
  icon: () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    );
  },
  fields: [
    {
      title: 'Activity Name',
      name: 'activity_name',
      type: 'string',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'activity_name',
        maxLength: 96,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bioPortableText',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: 'Drag-and-Drop',
          type: 'question',
        },
        {
          title: 'Question',
          type: 'open_question',
        },
      ],
    },
    {
      title: 'Course Source',
      name: 'course_source',
      type: 'reference',
      to: [{ type: 'course' }],
    },
    {
      title: 'Module Source',
      name: 'module_source',
      type: 'reference',
      to: [{ type: 'module' }],
    },
    {
      title: 'Next Page',
      name: 'next_page',
      type: 'reference',
      to: [{ type: 'lecture' }, { type: 'activity' }],
    },
  ],
  preview: {
    select: {
      title: 'activity_name',
      courseSource: 'course_source.course_name',
      moduleSource: 'module_source.module_name',

      status: 'emoji',
      color: 'color.hex',
    },
    prepare({ title, courseSource, moduleSource, status, color }) {
      return {
        title: title,
        subtitle: moduleSource
          ? `Activity Source: ${courseSource} / ${moduleSource}`
          : `Source: ${courseSource}`,
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
