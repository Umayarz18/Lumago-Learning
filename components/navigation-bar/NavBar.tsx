import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

function NavBar() {
	const router = useRouter();
	const login = async () => {
		return router.push("/login");
	};
	const logout = async () => {
		//auth.signOut().then(router.push("/"));
	};
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div className="nav-bar-box">
			<>
				{" "}
				{/** Normal Mode */}
				<nav className="flex items-center flex-wrap justify-between p-3 md:px-16 lg:px-24 bg-primary shadow-md ">
					<a
						href="/"
						className=" inline-flex items-center ml-5 text-secondary-lightest"
					>
						<svg
							className="h-10 w-10 mr-3"
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
						<span className="font-bold text-3xl text-secondary-lightest">
							Sprout
						</span>
					</a>

					<div className=" ">
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

					{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
					<div
						className={`${
							active ? "" : "hidden"
						}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
					>
						<div className="text-secondary-lightest lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center  flex flex-col lg:h-auto' mr-5">
							<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full items-center  flex flex-col lg:h-auto">
								<Link href="/about">
									<a className=" hover:bg-text-secondary-lightestml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:text-white">
										About Us
									</a>
								</Link>
								<Link href="/login">
									<a className="ml-5 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-vibrant-purple hover:text-white">
										Login
									</a>
								</Link>

								<Link href="/signup">
									<a className="ml-5 bg-green-600 border-green-700 hover:bg-green-700 hover:border-green-800 lg:inline-flex lg:w-auto  px-3 py-2 rounded-md text-white font-bold items-center justify-center border-2 border-b-4">
										Sign Up
									</a>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</>
		</div>
	);
}

export default NavBar;
