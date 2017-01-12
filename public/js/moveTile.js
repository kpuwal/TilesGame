/*
	Based on Arnaldo Perez Castano
	arnaldo.skywalker@gmail.com
*/

var currentStatus = new Array();

window.onload = updateStatus();

function updateStatus(){

	var spans = document.getElementsByClassName("cell");

	for(i=0;i<spans.length;i++)
	{
		currentStatus.push(spans[i].textContent);
	}
}

var pos = document.getElementById('empty').getAttribute('data-pos');
var emptytilePosRow = parseInt(pos.split(',')[0]);
var emptytilePosCol = parseInt(pos.split(',')[1]);

var cellDisplacement = "84px";


$(".start .cell").click(moveTile);

function moveTile() {
	var dataPositionArray = ['0,0', '0,1', '0,2', '1,0', '1,1', '1,2', '2,0', '2,1', '2,2'];

	var pos = $(this).attr('data-pos');

	var posRow = parseInt(pos.split(',')[0]);
	var posCol = parseInt(pos.split(',')[1]);

	// Move Up
	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol)
	{
		$(this).animate({
		'top' : "+=" + cellDisplacement
		});

		$('#empty').animate({
		'top' : "-=" + cellDisplacement
		});

		emptytilePosRow-=1;

		$(this).attr('data-pos',(posRow+1) + "," + posCol);

		for(var i=0; i<dataPositionArray.length; i++){
			if(dataPositionArray[i] == pos){
				var temp = currentStatus[i];
				currentStatus[i] = "";
				currentStatus[i+3] = temp;
			}
		}
		currentStatus = currentStatus;

		tilePosition = pos;
		console.log('new current status: ' + currentStatus);

	}

	// Move Down
	if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol)
	{
		$(this).animate({
		'top' : "-=" + cellDisplacement
		});

		$('#empty').animate({
		'top' : "+=" + cellDisplacement
		});

		emptytilePosRow+=1;
		$(this).attr('data-pos',(posRow-1) + "," + posCol);

		for(var i=0; i<dataPositionArray.length; i++){
			if(dataPositionArray[i] == pos){
				var temp = currentStatus[i];
				currentStatus[i] = "";
				currentStatus[i-3] = temp;
			}
		}
		currentStatus = currentStatus;
		tilePosition = pos;
		console.log('new current status: ' + currentStatus);
	}

	// Move Left
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol)
	{
		$(this).animate({
		'right' : "-=" + cellDisplacement
		});

		$('#empty').animate({
		'right' : "+=" + cellDisplacement
		});

		emptytilePosCol -= 1;
		$(this).attr('data-pos',posRow + "," + (posCol+1));

		for(var i=0; i<dataPositionArray.length; i++){
			if(dataPositionArray[i] == pos){
				var temp = currentStatus[i];
				currentStatus[i] = "";
				currentStatus[i+1] = temp;
			}
		}
		currentStatus = currentStatus;
		tilePosition = pos;
		console.log('new current status: ' + currentStatus);
	}

	// Move Right
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol)
	{
		$(this).animate({
		'right' : "+=" + cellDisplacement
		});

		$('#empty').animate({
		'right' : "-=" + cellDisplacement
		});

		emptytilePosCol += 1;
		$(this).attr('data-pos',posRow + "," + (posCol-1));
		for(var i=0; i<dataPositionArray.length; i++){
			if(dataPositionArray[i] == pos){
				var temp = currentStatus[i];
				currentStatus[i] = "";
				currentStatus[i-1] = temp;
			}
		}
		currentStatus = currentStatus;
		tilePosition = pos;
		console.log('new current status: ' + currentStatus);
	}

	$('#empty').attr('data-pos',emptytilePosRow + "," + emptytilePosCol);

}
