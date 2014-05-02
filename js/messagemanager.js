function hide_message(){
	
	panel_message = document.getElementById("message");
	panel_message.style.display = "none";

	autoplay();
}



function ShowMessage(winner){
	
	if (winner == 1) string_notification = "Game Over";
	else string_notification = "You Win";

	if (winner == 1) string_button = "Try Again!";
	else string_button = "Do it Again!";

	Message = document.getElementById("message");
	Message.style.display = "block";
	Message_Notification=document.getElementById("notification").innerHTML=string_notification;
	Message_Game=document.getElementById("button").innerHTML= string_button;
	

	Message_Share=document.getElementById("share_panel");
	Message_Share.style.display = "block";

	if (winner == 1)
		string_tweet="<a class='popup' target='_blank' href='http://twitter.com/share?text=No%20puedo%20ganar%20en%20este%203%20en%20raya!!!%20http://kimoinformatica.com/cursos/GameTicTacToe/&via=JoseCodFacilito'>Tweet you Try!</a>";
	else
		string_tweet="<a class='popup' target='_blank' href='http://twitter.com/share?text=He%20vencido%20en%20el%203%20en%20raya%20a%20una%20app%20con%20inteligencia%20artificial!!!%20http://kimoinformatica.com/cursos/GameTicTacToe/&via=JoseCodFacilito'>Tweet you Win!</a>";
		

	Tweet_Game=document.getElementById("tweet_gameover").innerHTML=string_tweet;
	
	WaitRestart();
}