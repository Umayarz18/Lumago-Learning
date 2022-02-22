import React, { useState } from "react";

export interface SidenavProps {
	activePage: string;
	setActivePage: any;
	state: any;
}

export type NavItemProps = {
	activePage: string;
	link: string;
	svgIcon: unknown;
	title: string;
	setActivePage: any;
};
const Sidenav = ({ activePage, setActivePage, state }: SidenavProps) => {
	const [active, setActive] = useState(state);
	const handleClick = () => {
		setActive(!active);
	};

	return (
		<div className="flex flex-col bg-green-700 text-green-50 pt-4 lg:py-4 h-20 lg:h-full row-span-3 w-screen lg:w-full z-50">
			<div className="inline-flex flex-row px-4">
				<a href="/grow" className="flex items-center ml-1 lg:pb-8">
					<SproutSvg />
					<h1 className="text-xl font-bold pl-3 no-underline text-green-50 hover:text-green-100">
						Sprout
					</h1>
				</a>
				<button
					className="inline-flex p-3 hover:bg-vibrant-purple rounded lg:hidden text-white ml-auto hover:text-white outline-none"
					aria-controls="mobile-menu"
					aria-expanded="false"
					onClick={handleClick}
				>
					<span className="sr-only">Open main menu</span>
					{/** When Closed */}
					<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
						<path
							fillRule="evenodd"
							d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
						></path>
					</svg>

					{/** When Opened */}
				</button>
			</div>
			<nav className="space-y-2 ">
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${
						active ? "" : "hidden"
					}   w-screen  lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className="w-full  flex flex-col lg:h-auto lg:mr-5">
						<div className="    flex flex-col lg:h-auto bg-green-700">
							<NavItem
								activePage={activePage}
								link="/grow"
								svgIcon={<ChartPieSvg />}
								title="Dashboard"
								setActivePage={setActivePage}
							/>
							<NavItem
								activePage={activePage}
								link="/grow/courses"
								svgIcon={<UsersSvg />}
								title="Courses"
								setActivePage={setActivePage}
							/>
							<NavItem
								activePage={activePage}
								link="/grow/my-progress"
								svgIcon={<ChartPieSvg />}
								title="Progress"
								setActivePage={setActivePage}
							/>
						</div>
					</div>
				</div>
			</nav>
			<div
				className={`${
					active ? "" : "hidden"
				} bg-green-800 md:bg-green-700 w-screen flex-row px-4 py-4 lg:py-0 items-center flex lg:flex-col lg:mt-auto lg:inline-flex lg:flex-grow lg:w-auto lg:justify-end`}
			>
				<a
					href="/grow/settings"
					className="inline-flex items-center px-3 no-underline text-green-50 opacity-70 hover:opacity-100"
				>
					<CogSvg />
					<div className="lg:pl-2">Settings</div>
				</a>
				<button className=" inline-flex items-center  lg:mt-2 px-3 no-underline text-green-50 opacity-70 hover:opacity-100">
					<LogOutSvg />
					<div className="lg:pl-2">Sign Out</div>
				</button>
			</div>
		</div>
	);
};

const NavItem = ({
	activePage,
	link,
	svgIcon,
	title,
	setActivePage,
}: NavItemProps) => (
	<a
		onClick={() => setActivePage(title)}
		href={link}
		className={`px-6 inline-flex  items-center no-underline text-green-50 hover:text-green-100 p-3 rounded-md ${
			activePage === title ? "bg-green-700" : ""
		}`}
	>
		{svgIcon}
		<div className="font-bold pl-3">{title}</div>
	</a>
);

const SproutSvg = () => (
	<svg
		className="h-10 w-10"
		viewBox="0 0 20 20"
		fill="transparent"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.45817 5.26855C8.47514 4.4784 9.1217 3.85303 9.91203 3.85303V3.85303C10.6948 3.85303 11.341 4.46982 11.3549 5.25242C11.4126 8.49475 11.1549 10.6586 11.3116 14.2191C11.4329 16.9748 12.0239 15.8163 12.338 16.9472C12.5548 17.7277 11.8651 18.4354 11.0566 18.4847V18.4847C9.84222 18.5587 8.5167 16.9934 8.52783 15.7767C8.53196 15.3261 8.52236 14.8098 8.49352 14.2191C8.35562 11.3951 8.4129 7.37659 8.45817 5.26855Z"
			fill="currentColor"
		/>
		<path
			d="M16.7591 10.8682C14.851 13.5737 14.1857 9.23416 11.2571 7.37491C8.32842 5.51566 6.01319 7.96264 7.92125 5.25717C9.8293 2.5517 11.2062 1.43525 14.1348 3.2945C17.0635 5.15375 18.6671 8.16272 16.7591 10.8682Z"
			fill="currentColor"
		/>
		<path
			d="M2.53008 9.72668C3.92387 12.7885 5.40818 8.58152 8.68359 7.27862C11.959 5.97572 13.8082 8.85638 12.4144 5.79458C11.0206 2.73278 9.85687 1.3579 6.58146 2.6608C3.30605 3.96369 1.13628 6.66489 2.53008 9.72668Z"
			fill="currentColor"
		/>
		<circle cx="10" cy="10" r="9.5" stroke="currentColor" />
	</svg>
);

const ChartPieSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
		<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
	</svg>
);

const UsersSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
	</svg>
);

const ChatAltSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
		<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
	</svg>
);

const CogSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
			clipRule="evenodd"
		/>
	</svg>
);
const LogOutSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
		/>
	</svg>
);
export default Sidenav;
