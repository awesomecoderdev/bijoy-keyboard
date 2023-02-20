chrome.commands.onCommand.addListener(function (command) {
	if (command === "bijoy") {
		chrome.storage.local.get("keyboard", function (result) {
			let language = "en";

			if (typeof result.keyboard === "undefined") {
				chrome.storage.local.set({ keyboard: "bn" });
				language = "en";
			} else if (result.keyboard == "bn") {
				chrome.storage.local.set({ keyboard: "en" });
				language = "en";
			} else if (result.keyboard == "en") {
				chrome.storage.local.set({ keyboard: "bn" });
				language = "bn";
			}

			chrome.tabs.query({}, function (tabs) {
				for (var i = 0; i < tabs.length; i++) {
					chrome.tabs.sendMessage(tabs[i].id, {
						keyboard: language,
					});
				}
			});
		});
	}
});
