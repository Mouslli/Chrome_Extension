// send a message when the start button is clicked
$('#start').on('click',	Begin);
function Begin	()	{
	console.log ("clicking")
	var	initiate	=	$(this).attr('id');
		 chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message:	initiate});
	 });
}

// send a message when the pause button is clicked
$('#pause').on('click', stop);
function stop	()	{
	console.log ("clicking")
	var	pausing	=	$(this).attr('id');
		 chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message:	pausing});
	 });
}

// add audio file 
var myAudio = new Audio(chrome.runtime.getURL("sounds/meditation.mp3"));

// when start button clicked start playing audio
$('#start').on ("click", function (){
	myAudio.play();

});

// when clicked pause audio
$('#pause').on("click", function(){
	myAudio.pause();
})



