/*
	Developed by Arnaldo Perez Castano
	arnaldo.skywalker@gmail.com
*/

var emptytilePosRow = 1;
var emptytilePosCol = 2;

console.log(emptytilePosCol);
console.log(emptytilePosRow);

var cellDisplacement = "84px";

$(".start .cell").click(moveTile);

function moveTile() {
	// Gets the position of the current element
	var pos = $(this).attr('data-pos');
	var posRow = parseInt(pos.split(',')[0]);
	var posCol = parseInt(pos.split(',')[1]);

	// Move Up
	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol)
	{
		$(this).animate({
		'top' : "+=" + cellDisplacement //moves up
		});

		$('#empty').animate({
		'top' : "-=" + cellDisplacement //moves down
		});

		emptytilePosRow-=1;
		$(this).attr('data-pos',(posRow+1) + "," + posCol);
	}

	// Move Down
	if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol)
	{
		$(this).animate({
		'top' : "-=" + cellDisplacement //moves down
		});

		$('#empty').animate({
		'top' : "+=" + cellDisplacement //moves up
		});

		emptytilePosRow+=1;
		$(this).attr('data-pos',(posRow-1) + "," + posCol);
	}

	// Move Left
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol)
	{
		$(this).animate({
		'right' : "-=" + cellDisplacement //moves right
		});

		$('#empty').animate({
		'right' : "+=" + cellDisplacement //moves left
		});

		emptytilePosCol -= 1;
		$(this).attr('data-pos',posRow + "," + (posCol+1));
	}

	// Move Right
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol)
	{
		$(this).animate({
		'right' : "+=" + cellDisplacement //moves left
		});

		$('#empty').animate({
		'right' : "-=" + cellDisplacement //moves right
		});

		emptytilePosCol += 1;
		$(this).attr('data-pos',posRow + "," + (posCol-1));
	}

	// Update empty position
	$('#empty').attr('data-pos',emptytilePosRow + "," + emptytilePosCol);
}



var step = 0
var solution = " "

function showSteps() {

	var move = ''

	switch(solution[step]) {
			case "R":
				move =  (emptytilePosRow).toString() + ',' + (emptytilePosCol + 1).toString()
				break
			case "L":
				move =  (emptytilePosRow).toString() + ',' + (emptytilePosCol - 1).toString()
				break
			case "U":
				move =  (emptytilePosRow - 1).toString() + ',' + (emptytilePosCol).toString()
				break
			case "D":
				move =  (emptytilePosRow + 1).toString() + ',' + (emptytilePosCol).toString()
				break
	}

	$("div[data-pos='" + move + "']").click()
	panel.innerHTML += 'Step: ' + step + ' -> ' + solution[step] + ' ,'
	step++
}
