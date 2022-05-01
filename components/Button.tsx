import React from "react";

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	/**
	 * Optional additional classes
	 */
	classes?: string;
	/**
	 * Optional animation
	 */
	animate?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size,
	backgroundColor,
	label,
	classes,
	animate = false,
	...props
}: ButtonProps) => {
	const mode = primary
		? "bg-indigo-600 text-white   border-indigo-700 hover:bg-indigo-700 hover:border-indigo-800 "
		: "bg-transparent text-gray-700 border-gray-400 hover:bg-gray-200 ";

	const sizePicked =
		size === "large"
			? "text-lg sm:text-xl md:text-2xl lg:text-3xl"
			: size === "small"
			? "test-sm md:text-base "
			: "text-sm sm:text-md md:text-lg lg:text-xl";
	return (
		<button
			type="button"
			className={[
				animate
					? "transition duration-500 ease-in-out font-bold  transform hover:-translate-y-1"
					: "",
				"py-1 px-3 border-2 border-b-4 rounded-md font-bold",
				mode,
				classes,
				sizePicked,
			].join(" ")}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
