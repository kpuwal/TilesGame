

$("#solve_it").click(function(){
    $.post("/state",
    {
        status: currentStatus,
        emptyRow: emptytilePosRow,
        emptyCol: emptytilePosCol
    });
});



function loadSolution() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("solution_panel").innerHTML = this.responseText;
    }
  };

  setTimeout(function() {
    xhttp.open("GET", "/solution", true);
    xhttp.send();
  }, 2700);

  setTimeout(function(){
    var solution = document.getElementById('dummy').value;
    console.log('path: ' + solution);
    document.getElementById('show_solution').style.visibility = 'visible';
    

    $("#show_solution").click(function() {
      document.addEventListener("DOMContentLoaded", function(event) {
        showSolution();
      });
    });
  }, 3000);
}


var step = 0
var solution = ''

function showSolution() {
  var solution = document.getElementById('dummy').value;

  document.getElementById("show_solution").value="Next Step";

  switch(solution[step]){
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
  step_panel.innerHTML += 'Step: ' + step + ' -> ' + solution[step] + ' ,'
  step++
}


// functions:
// loadSolution()
// showSolution()

// click events ajax
// controller
