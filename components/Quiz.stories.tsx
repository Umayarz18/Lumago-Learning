import React from "react";
import { Story, Meta } from "@storybook/react";
import { Quiz, QuizProps } from "./Quiz";

export default {
	title: "Example/Quiz",
	component: Quiz,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Quiz>;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

/**
 * A multiple choice question
 */
export const MCQuiz = Template.bind({});
MCQuiz.args = {
	question: "What do you call a cow in an earthquake?",
	type: "MC",
	answer: "milkshake",
	options: ["milkshake", "break", "take"],
};

export const FITBQuiz = Template.bind({});
FITBQuiz.args = {
	question: "_______ is the powerhouse of the cell.",
	type: "FITB",
	answer: "Mitochondria",
};
