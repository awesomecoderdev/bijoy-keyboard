console.log("Background script loaded"),"undefined"!=typeof window?(console.log("window found"),window.addEventListener("keyup",(function(o){console.log("event",o)}))):console.log("Window not found");