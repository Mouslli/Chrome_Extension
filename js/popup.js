$('#start').on('click',	Begin);
function Begin	()	{
	console.log ("clicking")
	var	initiate	=	$(this).attr('id');
		 chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message:	initiate});
	 });
}

var myAudio = new Audio(chrome.runtime.getURL("sounds/meditation.mp3"));

$('#start').on ("click", function (){
	myAudio.play();

});


$('#pause').on("click", function(){
	myAudio.pause();
})
