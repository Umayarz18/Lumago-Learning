import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

export interface ModalProps {
	title: string;
	children: typeof React.Children;
	isFormModal: boolean;
	buttonLabel: string;
	type: "link" | "";
}

export default function Modal({
	title,
	children,
	isFormModal,
	buttonLabel,
	type,
}: ModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	function saveFormResult() {
		//take all the form inputs + send to api to PUT or POST job
	}

	return (
		<>
			<button
				type="button"
				onClick={openModal}
				className={[
					type === "link"
						? `px-4 py-2 text-indigo-500 font-medium hover:underline focus:outline-none 
            focus:underline focus:text-indigo-600  hover:text-indigo-600`
						: "px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
				].join(" ")}
			>
				{buttonLabel}
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-60" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<div className=" p-4">
									<Dialog.Title
										as="h4"
										className="font-medium text-2xl leading-6 text-gray-900"
									>
										{title}
									</Dialog.Title>
									<p className="mt-2 text-sm text-gray-500">{children}</p>
								</div>

								<div className="bg-gray-200 mt-4 flex flex-row gap-2 justify-end p-2">
									{!isFormModal && (
										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									)}
									{isFormModal && (
										<>
											<button
												type="button"
												className="inline-flex justify-center px-4 py-2 text-sm 
                        font-medium text-gray-900 border border-transparent rounded-md hover:underline 
                        focus:outline-none focus-visible:ring-2 
                        focus-visible:ring-offset-2 focus-visible:ring-gray-500"
												onClick={closeModal}
											>
												Discard Record
											</button>
											<button
												type="button"
												className="inline-flex justify-center px-4 py-2 text-sm 
                        font-medium text-gray-100 bg-gray-800 border 
                        border-transparent rounded-md hover:bg-gray-700 
                        focus:outline-none focus-visible:ring-2 
                        focus-visible:ring-offset-2 focus-visible:ring-gray-500"
												onClick={closeModal}
											>
												Create Record
											</button>
										</>
									)}
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
