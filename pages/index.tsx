import React from "react";
import { useRouter } from "next/router";
import { getAllDocSlugs, getPage } from "../data";

export default function Page() {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const router = useRouter();

	return <>huh</>;
}

// export async function getStaticProps({ params, preview, previewData }) {
// 	const pageData = await getPage(params.slug.join("/"), {
// 		active: preview,
// 		token: previewData?.token,
// 	});

// 	return {
// 		props: {
// 			data: pageData,
// 		},
// 	};
// }

// export async function getStaticPaths() {
// 	const allPages = await getAllDocSlugs("page");

// 	return {
// 		paths:
// 			allPages?.map((page) => {
// 				const slugs = page.slug.split("/").filter(Boolean);

// 				return {
// 					params: {
// 						slug: slugs,
// 					},
// 				};
// 			}) || [],
// 		fallback: false,
// 	};
// }
