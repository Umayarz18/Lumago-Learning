import { PuzzleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
export default function Banner() {
	const [active, setActive] = useState();

	const handleClick = (e) => {
		e.preventDefault();
		// setActive(false);
		alert(active);
	};
	return (
		<div className={active ? "block" : "block"}>
			<div className="bg-green-600">
				<div className="lg:max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between flex-wrap">
						<div className="lg:w-0 flex-1 w-full flex flex-row items-center">
							<span className="flex p-2 rounded-lg bg-green-800">
								<PuzzleIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</span>
							<p className="ml-3 font-medium text-white ">
								<span className="inline-flex md:hidden">
									This page is incomplete
								</span>
								<span className="hidden md:inline">
									Sorry this page is still in the works.
								</span>
							</p>
						</div>
						<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
							{/**
             * <a
            href="#"
            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
            >
            Learn more
            </a>
             */}
						</div>
						{/**
                        *  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                onClick={handleClick}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        */}
					</div>
				</div>
			</div>
		</div>
	);
}
