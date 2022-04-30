/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
import { Card } from "../../../../components/Card.tsx";
import { Quiz } from "../../../../components/Quiz.tsx";
import { Button } from "../../../../components/Button.tsx";
import { getClient } from "../../../../lib/sanity.server";
import { config } from "../../../../lib/config";
import { TempLayout } from "../../../components/TempLayout";
/**
 * Creates the individual course home page that lists the available lectures,
 * quizzes, and questions to be completed before the next course.
 * @returns 
 */
export default function CourseContent(props) {
    const router = useRouter();
    const { name, item } = router.query; //use this for the sanity search
    const { color,
        lecture_body = "empty content",
        lecture_name = "Huh",
        activity_title,
        quiz,
        next_page = "#"
    } = props;
    return (
        <TempLayout>
            <Head>
                <title>{activity_title ? activity_title : lecture_name} | {name} | Sprout Learning</title>
                <link rel="icon" href="/sprout_logo.jpg" />
            </Head>
            <div className="flex flex-col justify-center items-center ">
                <Card classes="w-screen lg:w-full lg:m-10  h-full sm:p-10 rounded-none lg:rounded-2xl">
                    <article className="flex flex-col justify-start">
                        <div className="text-left flex-col flex self-start ">
                            <a className="text-lg font-black text-gray-600 uppercase">{name}</a>
                            <h1 className="text-4xl font-bold text-gray-900 mx-0">{activity_title ? activity_title : lecture_name}</h1>
                        </div>

                        <div className="  prose ">
                            <BlockContent
                                blocks={lecture_body}
                                imageOptions={{ w: 320, h: 240, fit: "max" }}
                                {...config}
                            />
                        </div>
                        <div className="flex flex-col items-center my-10">
                            {quiz ? <Quiz
                                question={quiz.question}
                                type="MC"
                                answer={quiz.answer}
                                options={quiz.options}
                            /> : "Oopsie, there's no quiz here!"}

                        </div>
                    </article>
                    {next_page == null ? <a href="/grow/courses"><Button label="Finish" primary /></a> :
                        <a href={next_page.slug.current} className=""><Button label="Continue" primary /></a>
                    }
                </Card>
            </div>
        </TempLayout>
    );
}

const query = groq`
*[_type == "lecture" && slug.current == $item ||  _type == "activity" && slug.current == $item][0]{
    _type == 'lecture'=>{
        _id,
        color,
        lecture_name,
        lecture_body,
        quiz,
        next_page->{slug}
    },
    _type == 'activity'=>{
        _id,
        color,
        activity_title,
        description,
        next_page->{slug}
    },
     
}`;

CourseContent.getInitialProps = async function (context) {
    const { item = "" } = context.query;
    return await getClient().fetch(query, { item })
        .catch((error) => {
            console.log(error);
        });
};