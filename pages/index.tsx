/* eslint-disable react/prop-types */
import { groq } from "next-sanity";
import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { TempLayout } from "../components/TempLayout";
import { Video } from "../components/Video";
import { getClient } from "../lib/sanity.server";

export default function Example({ courses }) {
	const pageLinks = [
		{
			name: "Intro to Credit + Budgeting",
			link: "course/intro-to-credit-and-budgeting",
		},
	];

	return (
		<TempLayout header={"Welcome!"}>
			<section className="m-2">
				<h2>Money Management</h2>

				{courses.map(({ slug, course_name, _id }) => (
					<a key={_id} href={`/course/${slug.current}`}>
						{course_name}{" "}
					</a>
				))}
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
