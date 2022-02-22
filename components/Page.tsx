import React from "react";
import "./page.css";

export interface PageProps {
	user?: unknown;
	onLogin?: () => void;
	onLogout?: () => void;
	onCreateAccount?: () => void;
}

export const Page = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
}: PageProps) => (
	<div
		className={
			"bg-gradient-to-b from-indigo-900  via-blue-600 via to-blue-400 h-full min-h-screen"
		}
	>
		<div
			className={
				"grid grid-cols-4 container justify-center items-center mx-auto "
			}
		>
			<div
				className={
					"rounded-full border-4 border-primary bg-secondary-lightest h-48 w-48 m-5 flex justify-center items-center"
				}
			></div>

			<div
				className={
					"rounded-full border-4 border-primary bg-secondary-lightest h-48 w-48 m-5 flex justify-center items-center"
				}
			></div>

			<div
				className={
					"rounded-full border-4 border-primary bg-secondary-lightest h-48 w-48 m-5 flex justify-center items-center"
				}
			></div>

			<div
				className={
					"col-span-2 rounded-full border-4 border-primary bg-secondary-lightest h-48 w-48 m-5 flex justify-center items-center"
				}
			></div>

			<div
				className={
					"col-span-2 rounded-full border-4 border-primary bg-secondary-lightest h-48 w-48 m-5 flex justify-center items-center"
				}
			></div>
		</div>
	</div>
);
