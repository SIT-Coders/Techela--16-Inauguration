$(document).ready(function(){
	var audio = new Audio('images/Act_One_Tenebrous_Brothers_Carnival.mp3');
	
	audio.play();
	
	$('#play').click(function(){
		audio.play();	  
	});

	$('#stop').click(function(){
		audio.pause();	  
	});
});