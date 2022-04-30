/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import { TempLayout } from "../../components/TempLayout";
/**
 * Creates the individual course home page that lists the available lectures,
 * quizzes, and questions to be completed before the next course.
 * @returns
 */
export default function Courses(props) {
  const router = useRouter();
  const { courseList = [] } = props;

  return (
    <TempLayout>
      <Head>
        <title>Courses</title>
        <meta
          name="description"
          content="Sprout courses to learn about
                     personal finance."
        />
      </Head>

      <div className="relative grid grid-rows-auto justify-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Full Course Page</h1>
        <ul className=" grid grid-cols-auto lg:grid-cols-2 justify-center ">
          {courseList.map(
            ({ course_name, _id, color, emoji }) => course_name && (
              <a href={`/courses/${course_name.toLowerCase()}`} key={_id} >
                {course_name}
              </a>
            ))
          }
        </ul>
      </div>
    </TempLayout>
  );
}




export async function getStaticProps() {
  const courses = await getClient()
    .fetch(
      groq`
*[_type == "project"] | order(_createdAt asc) {
    "seo":seoContent{
    title,
    slug,
    description,
    }
  }`
    )
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      courses,
    },
    revalidate: 10, // In seconds
  };
}