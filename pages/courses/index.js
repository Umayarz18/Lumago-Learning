/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import { TempLayout } from "../../components/TempLayout";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";
/**
 * Creates the individual course home page that lists the available lectures,
 * quizzes, and questions to be completed before the next course.
 * @returns
 */
export default function Courses({ courses }) {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
  };

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

      <div className="text-center  bg-gray-800 w-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col ">
        <h1 className="text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl mx-auto max-w-5xl">
          <span className="block xl:inline">Learn "Almost" Everything On</span>{" "}
          <span className="block text-indigo-600 xl:inline">Personal Finance</span>
        </h1>
        <p className=" mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl max-w-3xl">
          We're working on bringing relavent and relatable courses to help you learn more about your money and how to make it work for you.
        </p>
      </div>

      <section className="m-2 md:m-0 flex flex-col justify-start">
        <h2>Current Courses</h2>
        <p>Right now, you can learn about these topics. Stay tuned for more content!</p>
        <div className=" grid grid-cols-auto md:grid-cols-2 justify-center">
          {courses.map(
            ({ course_name, _id, slug, course_description }) => course_name && (
              <div className="rounded-lg shadow-lg bg-white max-w-sm" key={_id}>
                <div className="rounded-t-lg h-4 w-full bg-indigo-400">
                </div>
                <div className="p-4">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{course_name}</h5>
                  <p className="text-gray-700 text-sm mb-4">
                    {course_description}
                  </p>
                  <a href={`/courses/${slug.current}`}><Button size="small" label={"Try Course"} />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </TempLayout>
  );
}




export async function getStaticProps() {
  const courses = await getClient()
    .fetch(
      groq`
  *[_type == "course"]`
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