/* eslint-disable react/prop-types */
import { groq } from "next-sanity";
import React from "react";
import { Button } from "../components/Button";
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
		<TempLayout>
			<div className="px-4 sm:px-6 lg:px-8 py-16 sm:text-center lg:text-left w-full">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span className="block xl:inline">Build Yourself A</span>{" "}
					<span className="block text-indigo-600 xl:inline">Better Future</span>
				</h1>
				<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					We teach all things personal finance so you can reach new heights 💸
					without empty pockets.
				</p>
				<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<a href={"/courses"}>
						<Button primary size="large" label="Get Started" />
					</a>
				</div>
			</div>
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
