import React, { FC, useState } from "react";

export interface QuizProps {
	/** The question presented to the user */
	question: string;
	/**
	 * Answer of the question
	 */
	answer: string;
	/**
	 * An array of options that have an id and the actual option inside
	 */
	options?: string[];
	/**
	 * The type of questions possible (multiple choice, drag-and-drop, or
	 * fill in the blank).
	 */
	type: string[];
}

export interface questionProps {
	question: string;
	answer: string;
}

export interface MCProps extends questionProps {
	options: string[];
}

export const Quiz: FC<QuizProps> = ({
	question = "",
	answer = "",
	options,
	type = "MC",
}) => {
	switch (type[0]) {
		case "MC":
			return <MCQuiz question={question} answer={answer} options={options} />;
		case "OR":
			return <ORQuiz question={question} answer={answer} />;
		default:
			return <ORQuiz question={question} answer={answer} />;
	}
};

const MCQuiz = ({ question, answer, options }: MCProps) => {
	const [response, setResponse] = useState("");
	const [outcome, setOutcome] = useState("");

	const submitAnswer = (e) => {
		e.preventDefault();

		response.toLowerCase() === answer.toLowerCase()
			? setOutcome("Correct!")
			: setOutcome("Bad answer :(");
	};

	return (
		<>
			<div>
				<h3 className="font-semibold text-gray-700 text-2xl">Question</h3>
				<div className="grid grid-rows-auto md:grid-cols-2 space-x-2 w-full">
					<p>{question}</p>
					{outcome ? (
						<p
							className={[
								"font-bold ml-3",
								outcome === "Correct!" ? "text-green-600" : "text-red-600",
							].join(" ")}
						>
							{outcome}
						</p>
					) : (
						<div className="hidden"></div>
					)}
				</div>
			</div>
			<div className="flex flex-col w-full gap-y-2 ">
				{options?.map((option, id) => (
					<button
						key={id}
						className="flex justify-start group w-full rounded-xl shadow-sm border-2 border-gray-200  py-2 px-3 hover:bg-gray-200 active:bg-gray-300 group-focus:border-primary focus:bg-gray-300"
						onClick={() => setResponse(option)}
						onKeyPress={async (e) => {
							await setResponse(option);
							submitAnswer(e);
							alert(option);
						}}
					>
						{option}
					</button>
				))}
			</div>
			<div className="mt-3 flex justify-end"></div>
		</>
	);
};

const FITBQuiz = ({ question, answer }: questionProps) => {
	const [response, setResponse] = useState(""); //Manages the state of the repsonse (filled in or not)
	const [outcome, setOutcome] = useState("");

	const onSubmit = (e) => {
		//When submit button clicks, checks if current response equals answer
		e.preventDefault();

		response.toLowerCase() === answer.toLowerCase()
			? setOutcome("Correct!")
			: setOutcome("Bad answer :(");
	};

	// Returns a rounded rectangle with a question and form to enter answer
	return (
		<>
			<div className="ml-10">
				<h2 className="font-semibold text-gray-800 text-2xl">Question</h2>
				<div className="grid grid-cols-2 space-x-2">
					<p>{question}</p>
					{outcome ? (
						<p
							className={[
								"font-bold",
								outcome === "Correct!" ? "text-green-600" : "text-red-600",
							].join(" ")}
						>
							{outcome}
						</p>
					) : (
						<></>
					)}
				</div>
			</div>
			<form onSubmit={onSubmit} className="ml-10 flex-row flex">
				<input
					className="rounded-lg border-2 border-gray-400 px-3 py-1 mr-2"
					type="text"
					onChange={(e) => setResponse(e.target.value)}
				/>
			</form>
		</>
	);
};

const ORQuiz = ({ question, answer }: questionProps) => {
	const [response, setResponse] = useState(""); //Manages the state of the repsonse (filled in or not)
	const [outcome, setOutcome] = useState("");

	const onSubmit = (e) => {
		//When submit button clicks, checks if current response equals answer
		e.preventDefault();

		response.toLowerCase() === answer.toLowerCase()
			? setOutcome("Correct!")
			: setOutcome("Bad answer :(");
	};

	// Returns a rounded rectangle with a question and form to enter answer
	return (
		<section className="flex flex-col items-center">
			<h3 className="font-semibold text-gray-700 text-2xl self-start">
				Question
			</h3>
			<div className="grid grid-rows-auto md:grid-cols-2 space-x-2 w-full">
				<p>{question}</p>
				{outcome ? (
					<p
						className={[
							"font-bold",
							outcome === "Correct!" ? "text-green-600" : "text-red-600",
						].join(" ")}
					>
						{outcome}
					</p>
				) : (
					<></>
				)}
			</div>
			<form onSubmit={onSubmit} className=" flex-row flex w-full  h-24">
				<input
					className="rounded-lg border-2 bg-white border-gray-400 px-3 py-1 w-full"
					type="text"
					onChange={(e) => setResponse(e.target.value)}
				/>
			</form>
		</section>
	);
};
