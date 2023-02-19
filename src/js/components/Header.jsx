import { useEffect, useState } from "react";
import { Tab, Transition } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	const [isShowing, setIsShowing] = useState(false);
	let [categories] = useState({
		Recent: [
			{
				id: 1,
				title: "Does drinking coffee make you smarter?",
				date: "5h ago",
				commentCount: 5,
				shareCount: 2,
			},
			{
				id: 2,
				title: "So you've bought coffee... now what?",
				date: "2h ago",
				commentCount: 3,
				shareCount: 2,
			},
		],
		Popular: [
			{
				id: 1,
				title: "Is tech making coffee better or worse?",
				date: "Jan 7",
				commentCount: 29,
				shareCount: 16,
			},
			{
				id: 2,
				title: "The most innovative things happening in coffee",
				date: "Mar 19",
				commentCount: 24,
				shareCount: 12,
			},
		],
		Trending: [
			{
				id: 1,
				title: "Ask Me Anything: 10 answers to your questions about coffee",
				date: "2d ago",
				commentCount: 9,
				shareCount: 5,
			},
			{
				id: 2,
				title: "The worst advice we've ever heard about coffee",
				date: "4d ago",
				commentCount: 1,
				shareCount: 2,
			},
		],
	});
	const [users, setUsers] = useState([]);

	const IE = document.all ? 1 : 0;
	var prev = "";
	var current = "";
	var prevkr = "";
	var currentkr = "";

	var bijoy = {
		0: "০",
		1: "১",
		2: "২",
		3: "৩",
		4: "৪",
		5: "৫",
		6: "৬",
		7: "৭",
		8: "৮",
		9: "৯",

		a: "ৃ",
		A: "র্",
		d: "ি",
		D: "ী",
		s: "ু",
		S: "ূ",
		f: "া",
		F: "অ",
		g: "্",
		G: "।",
		h: "ব",
		H: "ভ",
		j: "ক",
		J: "খ",
		k: "ত",
		K: "থ",
		l: "দ",
		L: "ধ",
		z: "্র",
		Z: "্য",
		x: "ও",
		X: "ৗ",
		c: "ে",
		C: "ৈ",
		v: "র",
		V: "ল",
		b: "ন",
		B: "ণ",
		n: "স",
		N: "ষ",
		m: "ম",
		M: "শ",

		q: "ঙ",
		Q: "ং",
		w: "য",
		W: "য়",
		e: "ড",
		E: "ঢ",
		r: "প",
		R: "ফ",
		t: "ট",
		T: "ঠ",
		y: "চ",
		Y: "ছ",
		u: "জ",
		U: "ঝ",
		i: "হ",
		I: "ঞ",
		o: "গ",
		O: "ঘ",
		p: "ড়",
		P: "ঢ়",
		"&": "ঁ",
		$: "৳",
		"`": "‌",
		"~": "‍",

		"\\": "ৎ",
		"|": "ঃ",
	};

	function IsBanglaPreKar(CUni) {
		if (CUni == "ি" || CUni == "ৈ" || CUni == "ে") return true;

		return false;
	}

	function IsBanglaPostKar(CUni) {
		if (
			CUni == "া" ||
			CUni == "ো" ||
			CUni == "ৌ" ||
			CUni == "ৗ" ||
			CUni == "ু" ||
			CUni == "ূ" ||
			CUni == "ী" ||
			CUni == "ৃ"
		)
			return true;
		return false;
	}

	function IsBanglaKar(CUni) {
		if (IsBanglaPreKar(CUni) || IsBanglaPostKar(CUni)) return true;
		return false;
	}

	function MapKarToSorborno(CUni) {
		var CSorborno = CUni;
		if (CUni == "া") CSorborno = "আ";
		else if (CUni == "ি") CSorborno = "ই";
		else if (CUni == "ী") CSorborno = "ঈ";
		else if (CUni == "ু") CSorborno = "উ";
		else if (CUni == "ূ") CSorborno = "ঊ";
		else if (CUni == "ৃ") CSorborno = "ঋ";
		else if (CUni == "ে") CSorborno = "এ";
		else if (CUni == "ৈ") CSorborno = "ঐ";
		else if (CUni == "ো") CSorborno = "ও";
		else if (CUni == "ো") CSorborno = "ও";
		else if (CUni == "ৌ") CSorborno = "ঔ";
		else if (CUni == "ৌ") CSorborno = "ঔ";

		return CSorborno;
	}

	function KeyBoardPress(e) {
		prev = current;
		current = e.key;
		prevkr = currentkr;
		currentkr = bijoy[e.key] ? bijoy[e.key] : e.key;
		if (!bijoy[e.key]) return false;
		const char = bijoy[e.key] ? bijoy[e.key] : e.key;
		let value = e.target.value;
		value += char;
		if (prev == "g" && IsBanglaKar(char)) {
			value = value.replace("্" + char, MapKarToSorborno(char));
		}

		if (IsBanglaPreKar(prevkr)) {
			var removelast2 = value.substring(0, value.length - 2);
			var last2 = value.slice(-2);
			var newlast2 = last2.replace(prevkr + char, char + prevkr);
			value = removelast2 + newlast2;
		}
		e.target.value = value;
		e.preventDefault();
	}

	useEffect(() => {
		const inputs = document.querySelector('input[type="text"]');
		const search = document.querySelector('input[type="search"]');
		const textarea = document.querySelector("textarea");

		if (IE) {
			if (inputs) inputs.style.fontFamily = "SutonnyBanglaOMJ";
			if (textarea) textarea.style.fontFamily = "SutonnyBanglaOMJ";
		} else {
			if (inputs) inputs.style.fontFamily = "SolaimanLipi";
			if (textarea) textarea.style.fontFamily = "SolaimanLipi";
		}

		if (textarea)
			textarea.addEventListener("keypress", function (e) {
				KeyBoardPress(e);
			});
		if (inputs)
			inputs.addEventListener("keypress", function (e) {
				KeyBoardPress(e);
			});
		if (search)
			search.addEventListener("keypress", function (e) {
				KeyBoardPress(e);
			});

		// Fetch data from the API
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => response.json())
				.then((data) => setUsers(data))
				.catch((error) => console.error(error));
		}, 500);
		// // Set the user's name in local storage
		// chrome.storage.local.set({ name: "John Doe" }, function () {
		// 	console.log("Name saved to local storage");
		// });

		// // Get the user's name from local storage
		// chrome.storage.local.get("name", function (result) {
		// 	console.log("Name retrieved from local storage: " + result.name);
		// });
	}, []);

	return (
		<>
			{/* <div className="w-full">
				<Tab.Group>
					<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
						{Object.keys(categories).map((category) => (
							<Tab
								key={category}
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white shadow"
											: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
									)
								}
							>
								{category}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2">
						{Object.values(categories).map((posts, idx) => (
							<Tab.Panel
								key={idx}
								className={classNames(
									"rounded-xl bg-white p-3",
									"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
								)}
							>
								<ul>
									{posts.map((post) => (
										<li
											key={post.id}
											className="relative rounded-md p-3 hover:bg-gray-100"
										>
											<h3 className="text-sm font-medium leading-5">
												{post.title}
											</h3>

											<ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
												<li>{post.date}</li>
												<li>&middot;</li>
												<li>
													{post.commentCount} comments
												</li>
												<li>&middot;</li>
												<li>
													{post.shareCount} shares
												</li>
											</ul>

											<a
												href="#"
												className={classNames(
													"absolute inset-0 rounded-md",
													"ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
												)}
											/>
										</li>
									))}
								</ul>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div> */}

			{/* <textarea className="bangla"></textarea> */}

			<section className="relative ">
				<div className="w-screen max-w-xs mx-auto">
					<div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 xl:grid-cols-2">
						{users.length == 0 ? (
							<>
								<div className=" animate-pulse px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-white hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
									<div className="flex flex-col sm:-mx-4 sm:flex-row ">
										<div className="flex-shrink-0 object-cover w-24 h-24 flex justify-center items-center rounded-full sm:mx-4 ring-4 ring-gray-300">
											<svg
												className="w-12 h-12 text-gray-200"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 640 512"
											>
												<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
											</svg>
										</div>

										<div className="mt-4 sm:mt-0">
											<h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
												<p class="w-28 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</h1>

											<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
												{/* <p class="w-40 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> */}
												<p class="w-48 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</p>
										</div>
									</div>

									<p className="mt-6 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
										<p class="w-44 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
										<p class="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
									</p>

									<div className="flex mt-4 -mx-2">
										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Reddit"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
											</svg>
										</div>

										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Facebook"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
											</svg>
										</div>

										<div
											className="mx-2 pointer-events-none text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Github"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
											</svg>
										</div>
									</div>
								</div>
								<div className=" animate-pulse px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-white hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
									<div className="flex flex-col sm:-mx-4 sm:flex-row ">
										<div className="flex-shrink-0 object-cover w-24 h-24 flex justify-center items-center rounded-full sm:mx-4 ring-4 ring-gray-300">
											<svg
												className="w-12 h-12 text-gray-200"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 640 512"
											>
												<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
											</svg>
										</div>

										<div className="mt-4 sm:mt-0">
											<h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
												<p class="w-28 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</h1>

											<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
												{/* <p class="w-40 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> */}
												<p class="w-48 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</p>
										</div>
									</div>

									<p className="mt-6 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
										<p class="w-44 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
										<p class="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
									</p>

									<div className="flex mt-4 -mx-2">
										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Reddit"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
											</svg>
										</div>

										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Facebook"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
											</svg>
										</div>

										<div
											className="mx-2 pointer-events-none text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Github"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
											</svg>
										</div>
									</div>
								</div>
								<div className=" animate-pulse px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-white hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
									<div className="flex flex-col sm:-mx-4 sm:flex-row ">
										<div className="flex-shrink-0 object-cover w-24 h-24 flex justify-center items-center rounded-full sm:mx-4 ring-4 ring-gray-300">
											<svg
												className="w-12 h-12 text-gray-200"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 640 512"
											>
												<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
											</svg>
										</div>

										<div className="mt-4 sm:mt-0">
											<h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
												<p class="w-28 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</h1>

											<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
												{/* <p class="w-40 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> */}
												<p class="w-48 h-2  mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
											</p>
										</div>
									</div>

									<p className="mt-6 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
										<p class="w-44 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
										<p class="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
									</p>

									<div className="flex mt-4 -mx-2">
										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Reddit"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
											</svg>
										</div>

										<div
											className="pointer-events-none mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Facebook"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
											</svg>
										</div>

										<div
											className="mx-2 pointer-events-none text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
											aria-label="Github"
										>
											<svg
												className="w-6 h-6 fill-current"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
											</svg>
										</div>
									</div>
								</div>
							</>
						) : (
							""
						)}
						{users.map((user) => (
							<div
								key={user.id}
								className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-white hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
							>
								<div className="flex flex-col sm:-mx-4 sm:flex-row">
									<img
										className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
										src="https://awesomecoderdev.github.io/img/profile.jpg"
										alt="AwesomeCoder"
									/>

									<div className="mt-4 sm:mx-4 sm:mt-0">
										<h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
											{user?.name}
										</h1>

										<p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
											({user.username}) at{" "}
											{user.company.name}
										</p>
									</div>
								</div>

								<p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
									{user.email}, {user.phone}
								</p>

								<div className="flex mt-4 -mx-2">
									<a
										href="https://github.com/awesomecoderdev"
										target="_blank"
										className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
										aria-label="Reddit"
									>
										<svg
											className="w-6 h-6 fill-current"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
										</svg>
									</a>

									<a
										href="https://facebook.com/awesomecoderdev"
										target="_blank"
										className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
										aria-label="Facebook"
									>
										<svg
											className="w-6 h-6 fill-current"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
										</svg>
									</a>

									<a
										href="https://github.com/awesomecoderdev"
										target="_blank"
										className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
										aria-label="Github"
									>
										<svg
											className="w-6 h-6 fill-current"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
										</svg>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
