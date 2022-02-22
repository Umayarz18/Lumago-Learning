import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import { Quiz } from "./Quiz";
export default {
	title: "Example/Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	decorators: [
		(Story) => (
			<div className="flex justify-center items-center">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CoursePreview = Template.bind({});
CoursePreview.args = {
	classes: " p-6 h-40 ",
	children: (
		<div className="flex flex-row items-center">
			<div
				className={
					"rounded-l-lg h-28 w-28 bg-blue-300 mx-3 flex justify-center items-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
				}
			>
				🏛
			</div>
			<div className="flex flex-col items-start">
				<h2 className="text-gray-700 font-extrabold sm:text-md md:text-lg lg:text-xl xl:text-2xl ">
					Course Name
				</h2>
				{/**Progress Bar */}
				<div className="relative pt-1 w-full">
					<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
						<div
							style={{ width: "30%" }}
							className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
						></div>
					</div>
				</div>
				<a href="#" className="font-bold text-primary">
					Start Course
				</a>
			</div>
		</div>
	),
};

export const LecturePreview = Template.bind({});
LecturePreview.args = {
	classes: "p-6 h-40 w-full xl:min-w-max",
	children: (
		<div className="flex flex-row items-center ">
			<div
				className={
					"rounded-l-lg h-28 w-28 bg-blue-300 mx-3 flex justify-center items-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
				}
				style={{ backgroundColor: "#CBe091" }}
			>
				🏛
			</div>
			<div className="flex flex-col items-start">
				<h2 className="text-gray-700 font-extrabold sm:text-md md:text-lg lg:text-xl xl:text-2xl">
					Lecture
				</h2>
				<a href={"#"} className="font-bold text-primary">
					Start Lecture
				</a>
			</div>
		</div>
	),
};

export const LectureMC = Template.bind({});
LectureMC.args = {
	classes: "w-screen  xl:w-9/12 h-screen sm:p-10 p-5",
	children: (
		<article className="flex flex-col justify-center items-center xl:mx-10">
			<div className="place-self-start flex-col flex">
				<a className="text-lg font-medium text-gray-600">Budgeting</a>
				<h1 className="text-4xl font-bold text-gray-900 mx-0">
					Creating a Budget Plan
				</h1>
			</div>
			<div className="xl:text-lg">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>
			</div>
			<div className="flex flex-col items-center">
				<Quiz
					question="What do you call a cow in an earthquake?"
					type="MC"
					answer="milkshake"
					options={["milkshake", "break", "take"]}
				/>
			</div>
		</article>
	),
};

export const LectureFITB = Template.bind({});
LectureFITB.args = {
	classes: "w-screen  xl:w-9/12 h-screen sm:p-10 p-5",
	children: (
		<article className="flex flex-col justify-center items-center xl:mx-10">
			<div className="place-self-start flex-col flex">
				<a className="text-lg font-medium text-gray-600">Budgeting</a>
				<h1 className="text-4xl font-bold text-gray-900 mx-0">
					Setting Goals for Realistic Budgets
				</h1>
			</div>
			<div className="xl:text-lg">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
					facilis rerum hic, libero mollitia deserunt delectus, laudantium a
					perspiciatis quae aut deleniti cupiditate commodi quo quis nulla
					ullam, voluptatibus beatae?
				</p>
			</div>
			<div className="flex flex-col items-center">
				<Quiz
					question="What do you call a cow in an earthquake?"
					type="FITB"
					answer="milkshake"
				/>
			</div>
		</article>
	),
};
