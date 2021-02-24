chrome.runtime.onMessage.addListener(
function(request)	{
var	color	=	request.message;
console.log("clicked")
	$("h1").text("Howdy doo");
	$('body').addClass("Overlay");
	}
);

