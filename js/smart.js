
function CheckBlock(x, y){ 
	//alert("analizando c"+x+y);
	//alert("en row"+y+" hay "+CheckRow(y, 1)+" bolas y "+CheckRow(y, 2)+" cruces");
	if (CheckRow(y, 1) == 1 && CheckRow(y, 2) == 2){/*alert("c" + x + y +" esta bloqueando la row"+y);*/ return true;}
	
	//alert("en col"+x+" hay "+CheckColumn(x, 1)+" bolas y "+CheckColumn(x, 2)+" cruces");
	if (CheckColumn(x, 1) == 1 && CheckColumn(x, 2) == 2) {/*alert("c" + x + y +" esta bloqueando la col"+x);*/ return true;}

	if ( 	(x == 1 && y == 1) ||
			(x == 0 && y == 2) ||
			(x == 2 && y == 0) ){
		//alert("en diag1 hay "+CheckDiag(1, 1)+" bolas y "+CheckDiag(1, 2)+" cruces");
		if (CheckDiag(1, 1) == 1 && CheckDiag(1, 2) == 2) {/*alert("c" + x + y +" esta bloqueando la diag1");*/ return true;}
	}
	if ( 	(x == 1 && y == 1) ||
			(x == 0 && y == 0) ||
			(x == 2 && y == 2) ){
		//alert("en diag-1 hay "+CheckDiag(-1, 1)+" bolas y "+CheckDiag(-1, 2)+" cruces");
		if (CheckDiag(-1, 1) == 1 && CheckDiag(-1, 2) == 2) {/*alert("c" + x + y +" esta bloqueando la diag-1");*/ return true;}
	}

	//alert("c" + x + y +" no esta bloqueando nada");
	return false;
}





//si hay 2 en linea
	//si el hueco esta libre
		//si hay 3 fichas en el tablero
			//se quita la que sobra
		//se pone en la libre y return true
	//sino return false
//sino return false

function CompleteRow(x, turn_value){
	if (CheckRow(x, turn_value) == 2){
		Find_final = false;
		for (i=0; i<3; i++){
			if (board[i][x] == 0){
				Find_final_x = i;
				Find_final_y = x;
				Find_final = true;
			} 
		}

		if (Find_final == true){
			if (CheckTurn_Count(turn_value) == 3){
				//si estamos completando una linea de bolas
				if (turn_value == 1){
					//alert("vamos a completar row"+x);
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false; i++){
						if (i != x){
							for (j=0; j<3 && Find_lost == false; j++){
								if (board[j][i] == 1){
									Find_lost_x = j;
									Find_lost_y = i;
									Find_lost = true;
								}
							}
						}
					}

					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
				//si estamos bloqueando una linea rival
				else{
					//alert("vamos a bloquer row"+x+" con 3 fichas");
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false;i++){
						col=i;
						for (j=0; j<3 && Find_lost == false; j++){
							//alert("analizando para bloqueo row" + x + " la c"+i+j);
							if (board[i][j] == 1 && (CheckBlock(i, j) == false)){
									i=col;
									//alert("c"+i+j+" la marcamos para borrarla");
									Find_lost_x = i;
									Find_lost_y = j;
									Find_lost = true;
							}
							i=col;
						}
					}
					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
			}
			//if (turn_value == 2) alert("vamos a bloquer row"+x+" con 2 fichas");
			//alert("pintamos la casilla de completar o de bloqueo");
			PaintCell(Find_final_x, Find_final_y);
			return true;
		}
		else return false;
	}
	return false;
}



//si hay 2 en linea
	//si el hueco esta libre
		//si hay 3 fichas en el tablero
			//se quita la que sobra
		//se pone en la libre y return true
	//sino return false
//sino return false

function CompleteColumn(x, turn_value){
	if (CheckColumn(x, turn_value) == 2){

		Find_final = false;
		for (i=0; i<3; i++){
			if (board[x][i] == 0){
				Find_final_x = x;
				Find_final_y = i;
				Find_final = true;
			} 
		}

		if (Find_final == true){
			if (CheckTurn_Count(turn_value) == 3){
				//si estamos completando una linea de bolas
				if (turn_value == 1){
					//alert("vamos a completar col"+x);
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false; i++){
						if (i != x){
							for (j=0; j<3 && Find_lost == false; j++){
								if (board[i][j] == 1){
									//alert("c"+i+j+" la marcamos para borrarla");
									Find_lost_x = i;
									Find_lost_y = j;
									Find_lost = true;
								}
							}
						}
					}

					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
				//si estamos bloqueando una linea rival
				else{
					//alert("vamos a bloquer col"+x+" con 3 fichas");
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false; i++){
						col=i;
						for (j=0; j<3 && Find_lost == false; j++){
							//alert("analizando para bloqueo col" + x + " la c"+i+j);
							if (board[i][j] == 1 && (CheckBlock(i, j) == false)){
									i=col;
									//alert("c"+i+j+" la marcamos para borrarla");
									Find_lost_x = i;
									Find_lost_y = j;
									Find_lost = true;
							}
							i=col;
						}
						
					}
					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
			}
			//if (turn_value == 2) alert("vamos a bloquer col"+x+" con 2 fichas");
			//alert("pintamos la casilla de completar o de bloqueo");
			PaintCell(Find_final_x, Find_final_y);
			return true;
		} 
		else return false;
	}
	return false;
}

//si hay 2 en linea
	//si el hueco esta libre
		//si hay 3 fichas en el tablero
			//se quita la que sobra
		//se pone en la libre y return true
	//sino return false
//sino return false


function CompleteDiag(x, turn_value){
	if (CheckDiag(x, turn_value) == 2){
		Find_final = false;
		if (board[1][1] == 0){ 
			Find_final_x = 1; Find_final_y = 1; Find_final = true;}
		if (board[(1-x)][2] == 0){ 
			Find_final_x = (1-x); Find_final_y = 2; Find_final = true;}
		if (board[(1+x)][0] == 0){ 
			Find_final_x = (1+x); Find_final_y = 0; Find_final = true;}
		
		if (Find_final == true){
			if (CheckTurn_Count(turn_value) == 3){
				//si estamos completando linea nuestra
				if (turn_value == 1){
					//alert("vamos a completar diag"+x);
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false; i++){
						for (j=0; j<3 && Find_lost == false; j++){
							if ( ((i != 1     || j != 1) &&
								  (i != (1-x) || j != 2) &&
								  (i != (1+x) || j != 0)) &&
								 board[i][j] == 1){
									Find_lost_x = i;
									Find_lost_y = j;
									Find_lost = true;
							}
						}
					}
					
					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
				//si estamos bloqueando una linea rival
				else{
					//alert("vamos a bloquer diag"+x+" con 3 fichas");
					Find_lost = false;
					for (i=0; i<3 && Find_lost == false; i++){
						col=i;
						for (j=0; j<3 && Find_lost == false; j++){
							//alert("analizando para bloqueo diag" + x + " la c"+i+j);
							if (board[i][j] == 1 && (CheckBlock(i, j) == false)){
									i=col;
									//alert("c"+i+j+" la marcamos para borrarla");
									Find_lost_x = i;
									Find_lost_y = j;
									Find_lost = true;
							}
							i=col;
						}
						
					}
					Ball_Sellected_x = Find_lost_x;
					Ball_Sellected_y = Find_lost_y;
					ClearCell(Find_lost_x, Find_lost_y);
				}
			}
			//if (turn_value == 2) alert("vamos a bloquer diag"+x+" con 2 fichas");
			//alert("pintamos la casilla de completar o de bloqueo");
			PaintCell(Find_final_x, Find_final_y);
			return true;
		}
		else return false;
	}
	else return false;
}


function RandomMove(){
	CellAvailable = false;
	while (CellAvailable == false){
		x=Math.round(Math.random()*2);
		y=Math.round(Math.random()*2);
		if (board[x][y] == 0 && DifMov(x, y)) 
			CellAvailable = true;
	}

	PaintCell(x, y);
}
function SearchMove(){
	balls = CheckTurn_Count(1);
	if (balls > 1){

		Completed = false;
		//hacer linea
		if (Completed == false) Completed = CompleteRow(0, 1);
		if (Completed == false) Completed = CompleteRow(1, 1);
		if (Completed == false) Completed = CompleteRow(2, 1);
		if (Completed == false) Completed = CompleteColumn(0, 1);
		if (Completed == false) Completed = CompleteColumn(1, 1);
		if (Completed == false) Completed = CompleteColumn(2, 1);
		if (Completed == false) Completed = CompleteDiag(1, 1);
		if (Completed == false) Completed = CompleteDiag(-1, 1);
		//cortar linea
		if (Completed == false) Completed = CompleteRow(0, 2);
		if (Completed == false) Completed = CompleteRow(1, 2);
		if (Completed == false) Completed = CompleteRow(2, 2);
		if (Completed == false) Completed = CompleteColumn(0, 2);
		if (Completed == false) Completed = CompleteColumn(1, 2);
		if (Completed == false) Completed = CompleteColumn(2, 2);
		if (Completed == false) Completed = CompleteDiag(1, 2);
		if (Completed == false) Completed = CompleteDiag(-1, 2);
		if (Completed == false){
			if (balls == 3){
				//alert("ni se hace fila ni se bloquea,\nse quita una al azar que no bloquee para luego un randonmove");
				CellAvailable = false;
				while (CellAvailable == false){
					x=Math.round(Math.random()*2);
					y=Math.round(Math.random()*2);
					//alert("se envia a CheckBlock x:"+x+" - y:"+y);
					if (board[x][y] == 1 && (CheckBlock(x, y) == false)) 
						CellAvailable = true;
				}
				Ball_Sellected_x = x;
				Ball_Sellected_y = y;
				ClearCell(x, y);
			}
			RandomMove();
		} 
	}
	else{
		RandomMove();
	}

}