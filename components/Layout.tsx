import Head from "next/head";
import NavBar from "./navigation-bar/NavBar";
import React from "react";
export const siteTitle = "Lumago Learning | Youth Financial Education";

export interface LayoutProps {
	children: typeof React.Children;
	navType: "" | "";
}

export default function Layout({ children, navType }: LayoutProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/sprout_logo.jpg" />
				<meta name="description" content="Learn personal finance for youth." />
				{/*<meta property="og:image" content={`/sprout_logo.jpg`} />*/}
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<script
					src="https://kit.fontawesome.com/4c59a71fb5.js"
					crossOrigin="anonymous"
				></script>
			</Head>

			<div className="overflow-x-hidden">
				<header className="">
					<NavBar />
				</header>

				<div className="">
					<main>{children}</main>

					<footer></footer>
				</div>
			</div>
		</>
	);
}
