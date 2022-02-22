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
	type: "MC" | "FITB";
}

export type MCProps = {
	question: string;
	answer: string;
	options: string[];
};

export type FITBProps = {
	question: string;
	answer: string;
};
export const Quiz: FC<QuizProps> = ({
	question = "",
	answer = "",
	options,
	type = "MC",
}) => {
	switch (type) {
		case "MC":
			return <MCQuiz question={question} answer={answer} options={options} />;
		case "FITB":
			return <FITBQuiz question={question} answer={answer} />;
		default:
			return <MCQuiz question={question} answer={answer} options={options} />;
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
		<div className="bg-white flex flex-col xl:min-w-1/2 border-2 border-gray-300 p-3 rounded-3xl ">
			<div>
				<h2 className="font-semibold text-gray-800 text-2xl">Question</h2>
				<div className="grid grid-cols-2 w-full">
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
			<div className="flex  w-full  ">
				{options.map((option, id) => (
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
			<div className="mt-3 flex justify-end">
				<button
					className="bg-green-600 text-white border-green-700 
                    hover:bg-green-700 hover:border-green-800 py-1 px-3 
                    border-2 border-b-4 rounded-md font-bold text-sm sm:text-md 
                    md:text-lg lg:text-xl"
					onClick={submitAnswer}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

const FITBQuiz = ({ question, answer }: FITBProps) => {
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
		<div className=" bg-white flex flex-col  border-2 border-gray-300 p-3 rounded-3xl  justify-center items-start">
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
				<button
					className="bg-green-600 text-white border-green-700 
                    hover:bg-green-700 hover:border-green-800 py-1 px-3 
                    border-2 border-b-4 rounded-md font-bold text-sm sm:text-md 
                    md:text-lg lg:text-xl"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
