import React from "react";

export interface CardProps {
	/**
	 * Additional classes to alter the card
	 */
	classes: string;
	/**
	 * The children inside the card
	 */
	children: object;
}

export const Card = ({ children, classes, ...props }: CardProps) => {
	return (
		<div
			className={[
				"bg-gray-50 h-96 w-96 rounded-lg border-4 border-indigo-400",
				classes,
			].join(" ")}
		>
			{children}
		</div>
	);
};
