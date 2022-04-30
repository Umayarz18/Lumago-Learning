/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";
import groq from "groq";
import { TempLayout } from "../../../components/TempLayout";
import { getClient } from "../../../lib/sanity.server";
import { config } from "../../../lib/config";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
/**
 * Creates the individual course home page that lists the available lectures,
 * quizzes, and questions to be completed before the next course.
 * @returns 
 */
export default function Course(props) {
    const router = useRouter();
    const { name } = router.query;//use this for the insanity search

    const {
        course_name = "Unknown Course",
        color = "#fefefe",
        course_description = "Empty description",
        lectures,
        activities = [],
    } = props;

    return (
        <TempLayout>
            <Head>
                <title>{course_name} | Sprout Learning</title>
                <link rel="icon" href="/sprout_logo.jpg" />
            </Head>

            <div className="flex flex-col justify-center items-center" >
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl p-3"> {course_name}</h1>
                <div className="m-4 lg:w-3/6 text-center">
                    <BlockContent
                        blocks={course_description}
                        imageOptions={{ w: 320, h: 240, fit: "max" }}
                        {...config}
                    />
                </div>
            </div>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:m-16 gap-5">
                    {lectures.map(({ _id, color, lecture_name, emoji, lecture_slug }) => (
                        <a href={`/grow/courses/${name}/${lecture_slug}`} key={_id} >

                        </a>
                    ))}
                </div>
            </section>

        </TempLayout>
    );
}


const query = groq`*[_type == "course" && slug.current == $name][0]{
    course_name,
    color,
    course_description,
    "lectures": *[_type == "lecture" && references(^._id)]{
    _id,
    color,
    lecture_name,
    "lecture_slug": slug.current,
    emoji,
    _createdAt,
    } | order(_createdAt asc),
    "activities": *[_type =="activity" && references(^._id)]{
        _id,
        color,
        activity_title,
        emoji,
    }
  } `;

Course.getInitialProps = async function (context) {
    const { name = "" } = context.query;
    return await getClient().fetch(query, { name })
        .catch((error) => {
            console.log(error);
        });
};