import React, { useState } from "react";
import { useRouter } from "next/router";

import Sidenav from "./navigation-bar/Sidebar";
const ProtectedRoute = ({ children }: any) => {
	const router = useRouter();

	const [activePage, setActivePage] = useState("");

	return (
		<div
			className="h-screen grid lg:grid-rows-3 lg:grid-flow-col grid-cols-custom-sidenav-layout  overflow-x-hidden"
			style={{ gridTemplateColumns: "auto 1fr" }}
		>
			<Sidenav
				activePage={activePage}
				setActivePage={setActivePage}
				state={false}
			/>
			<Content>{children}</Content>
		</div>
	);
};
export default ProtectedRoute;

const Content = ({ children }: any) => (
	<div className=" row-span-2 col-span-2 flex flex-col">{children}</div>
);
