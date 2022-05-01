/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
import { Card } from "../../../components/Card";
import { Quiz } from "../../../components/Quiz";
import { Button } from "../../../components/Button";
import { getClient } from "../../../lib/sanity.server";
import { config } from "../../../lib/config";
import { TempLayout } from "../../../components/TempLayout";
import { Video } from "../../../components/Video";
/**
 * Creates the individual course home page that lists the available lectures,
 * quizzes, and questions to be completed before the next course.
 * @returns
 */
export default function CourseContent(props) {
	const router = useRouter();
	const { name, item } = router.query; //use this for the sanity search
	const {
		color,
		lecture_body = "empty content",
		lecture_name = "Huh",
		activity_title,
		questions,
		next_page = "#",
		video_link,
	} = props;
	return (
		<TempLayout>
			<Head>
				<title>
					{activity_title ? activity_title : lecture_name} | {name}{" "}
				</title>
				<link rel="icon" href="/sprout_logo.jpg" />
			</Head>
			<section className="md:m-2 w-full">
				<Card classes="w-screen lg:w-full lg:m-10  h-full p-3 lg:p-10 ">
					<article className="flex flex-col justify-start">
						<div className="text-left flex-col flex self-start ">
							<a className="text-lg font-black text-gray-600 uppercase mb-4">
								{name}
							</a>
							<h1 className="text-4xl font-bold text-gray-900 mx-0">
								{activity_title ? activity_title : lecture_name}
							</h1>
						</div>
						{video_link && <Video link={video_link} />}
						{lecture_body && (
							<div className="prose md:prose-base lg:prose-lg max-w-none">
								<BlockContent
									blocks={lecture_body}
									imageOptions={{ w: 320, h: 240, fit: "max" }}
									{...config}
								/>
							</div>
						)}
						<div className="flex flex-col  w-full">
							{questions?.map(({ question, options, answer, type }) => (
								<Quiz
									key={question}
									question={question}
									type={type}
									answer={answer}
									options={options}
								/>
							))}
						</div>
					</article>
					<section className="mt-5 flex self-end">
						{next_page == null ? (
							<a href="/courses">
								<Button label="Finish" primary />
							</a>
						) : (
							<a href={next_page.slug.current} className="">
								<Button label="Continue" primary />
							</a>
						)}
					</section>
				</Card>
			</section>
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
        questions,
        next_page->{slug},
        video_link
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
	return await getClient()
		.fetch(query, { item })
		.catch((error) => {
			console.log(error);
		});
};
