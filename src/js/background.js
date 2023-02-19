console.log("Background script loaded");

if (typeof window !== "undefined") {
	console.log("window found");
	// Add a keyup event listener to the window object
	window.addEventListener("keyup", function (e) {
		console.log("event", e);
	});
} else {
	console.log("Window not found");
}
