$('#start').on('click',	Begin);
function Begin	()	{
	console.log ("clicking")
	var	color	=	$(this).attr('id');
		 chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message:	color});
	 });
}

$('#end').on('click',	Finish);
function Finish	()	{
	console.log ("clicking")
	var	complete	=	$(this).attr('id');
		 chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message:complete});
	 });
}

