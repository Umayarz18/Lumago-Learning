import React from "react";
export default {
  title: "Lecture",
  name: "lecture", //identifier for the api
  type: "document",
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
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    );
  },
  //Fields inside the document
  fields: [
    {
      title: "Lecture Name",
      name: "lecture_name",
      type: "string",
    },
    {
      title: "Color",
      name: "color",
      type: "color",
    },
    {
      title: "Emoji",
      name: "emoji",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "lecture_name",
        maxLength: 96,
      },
    },
    {
      title: "Video Link",
      name: "video_link",
      type: "url",
      description: "Ensure the youtube link is an embed link and not a watch link",
    },
    {
      title: "Lecture Body",
      name: "lecture_body",
      type: "bodyPortableText",
    },
    {
      title: "Course Source",
      name: "course_source",
      type: "reference",
      to: [{ type: "course" }],
    },
    {
      title: "Module Source",
      name: "module_source",
      type: "reference",
      to: [{ type: "module" }],
    },
    {
      title: "Questions",
      name: "questions",
      type: "array",
      of: [{ type: "question" }],
    },
    {
      title: "Next Page",
      name: "next_page",
      type: "reference",
      to: [{ type: "lecture" }, { type: "activity" }],
    },
  ],
  preview: {
    select: {
      title: "lecture_name",
      courseSource: "course_source.course_name",
      status: "emoji",
      color: "color.hex",
      moduleSource: "module_source.module_name",
    },
    prepare({ title, courseSource, moduleSource, status, color }) {
      return {
        title: title,
        subtitle: moduleSource
          ? `Lecture Source: ${courseSource} / ${moduleSource}`
          : `Source: ${courseSource}`,
        media: (
          <span
            style={{
              fontSize: "1.5rem",
              backgroundColor: color,
              width: "4rem",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
            }}
          >
            <p>{status ? status : "🎫"}</p>
          </span>
        ),
      };
    },
  },
};
