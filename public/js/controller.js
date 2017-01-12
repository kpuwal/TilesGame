
// window.onload = updateStatus();

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
    var solution = document.getElementById('solved').value;
    console.log('path: ' + solution);
    document.getElementById('show_solution').style.visibility = 'visible';


    $("#show_solution").click(function() {
      document.addEventListener("DOMContentLoaded", function(event) {
        showSolution();
      });
    });
  }, 3000);
}




// functions:
// loadSolution()
// showSolution()

// click events ajax
// controller
