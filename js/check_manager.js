
function CheckRow(x, value){
	
	count_value = 0;

	for (i=0; i<3; i++){
		if (board[i][x] == value) count_value++;
	}

	return count_value;
}
function CheckColumn(x, value){
	
	count_value = 0;

	for (i=0; i<3; i++){
		if (board[x][i] == value) count_value++;
	}

	return count_value;
}

function CheckDiag(x, value){
	
	count_value = 0;

	if (board[1][1] == value) count_value++;
	if (board[(1-x)][2] == value) count_value++;
	if (board[(1+x)][0] == value) count_value++;

	return count_value;
}

function CheckLine(){

	if (turn == "ball") value = 1;
	else value = 2;
	Line=false;

	if (CheckRow(0, value) == 3) Line = true;  //alert("3 en raya en fila0");
	if (CheckRow(1, value) == 3) Line = true;  //alert("3 en raya en fila1");
	if (CheckRow(2, value) == 3) Line = true;  //alert("3 en raya en fila2");
	if (CheckColumn(0, value) == 3) Line = true;  //alert("3 en raya en col0");
	if (CheckColumn(1, value) == 3) Line = true;  //alert("3 en raya en col1");
	if (CheckColumn(2, value) == 3) Line = true;  //alert("3 en raya en col2");
	if (CheckDiag(1, value) == 3) Line = true;  //alert("3 en raya en diag1");
	if (CheckDiag(-1, value) == 3) Line = true;  //alert("3 en raya en diag-1");

	if (Line == true) ShowMessage(value);
}


function CheckTurn_Count(turn_value){
	Turn_count=0;
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){ 
			if (board[i][j] == turn_value) Turn_count++;
		}
	}
	return Turn_count;
	
}
function DifMov(x, y){
	diferent = false;

	if (turn == "cross"){
		if ( x != Cross_Sellected_x ) diferent = true;
		if ( y != Cross_Sellected_y ) diferent = true;
	}
	else{
		if ( x != Ball_Sellected_x ) diferent = true;
		if ( y != Ball_Sellected_y ) diferent = true;
	}
	return diferent;

}

