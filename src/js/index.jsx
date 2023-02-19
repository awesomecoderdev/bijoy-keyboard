import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Main from "./components/Main";

if (document.getElementById("root") != null) {
	const root = ReactDOM.createRoot(document.getElementById("root"));
	root.render(
		<Fragment>
			<Main />
		</Fragment>
	);
}
