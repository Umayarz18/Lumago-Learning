import React, { ReactNode } from "react";
import { TempHeader } from "./TempHeader";

export const TempLayout = (props: { header?: string; children: ReactNode }) => {
	return (
		<div className="min-h-full">
			<TempHeader />
			<main className="mx-auto max-w-7xl bg-white flex flex-col items-center gap-5 h-full prose md:prose-md lg:prose-lg xl:prose-xl">
				{props.children}
			</main>
		</div>
	);
};
