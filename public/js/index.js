$("#solve_it").click(function(){
  checkRadioButtons();
  $.post("/state", {
    status: currentStatus,
    emptyRow: emptytilePosRow,
    emptyCol: emptytilePosCol,
    manhattan: manhattan
  });
});

function loadSolution() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("solution_panel").innerHTML = this.responseText;
    }
  };

  refreshIntervalId = setInterval(function() {
    xhttp.open("GET", "/solution", true);
    xhttp.send();
    document.getElementById('show_steps').style.visibility = 'visible';
    document.getElementById('show_graph').style.visibility = 'visible';
    document.getElementById('start_again').style.visibility = 'visible';
  }, 500);

  setTimeout(function(){
    clearInterval(refreshIntervalId);
    var solution = document.getElementById('solved').value;
    $("#show_steps").click(function() {
      document.addEventListener("DOMContentLoaded", function(event) {
        showSteps();
      });
    });
  }, 6000);
}

function checkRadioButtons() {
  if(document.getElementById('manhattan').checked) {
    return manhattan = true;
  } else if(document.getElementById('misplaced').checked) {
    return manhattan = false;
  } else {
    alert("Choose heuristic first, please");
  }
}

function startAgain() {
    clearInterval(refreshIntervalId);
    location.reload();
}
