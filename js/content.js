chrome.runtime.onMessage.addListener(
function(request)	{
var	initiate	=	request.message;
console.log("clicked")
	$('body').toggleClass("Overlay");
	}
);

