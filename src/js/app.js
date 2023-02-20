/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require("./index");

const IE = document.all ? 1 : 0;
var prev = "";
var current = "";
var prevkr = "";
var currentkr = "";
var language = "en";

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
	if (language !== "bn") return false;
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

const inputs = document.querySelector('input[type="text"]');
const search = document.querySelector('input[type="search"]');
const textarea = document.querySelector("textarea");

// if (IE) {
// 	if (inputs) inputs.style.fontFamily = "SutonnyBanglaOMJ";
// 	if (textarea) textarea.style.fontFamily = "SutonnyBanglaOMJ";
// } else {
// 	if (inputs) inputs.style.fontFamily = "SolaimanLipi";
// 	if (textarea) textarea.style.fontFamily = "SolaimanLipi";
// }

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

chrome.storage.local.get("keyboard", function (result) {
	const keyboard = result.keyboard;
	if (typeof keyboard !== "undefined" && keyboard === "bn") {
		language = keyboard;
	} else {
		language = "en";
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	const keyboard = request.keyboard;
	if (typeof keyboard !== "undefined" && keyboard === "bn") {
		language = keyboard;
	} else {
		language = "en";
	}
});

window.addEventListener("keypress", (e) => {
	console.log("e.key", e.key);

	e.key = "H";
});
