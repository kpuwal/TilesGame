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
      document.getElementById('show_steps').style.visibility = 'visible';
      document.getElementById('show_graph').style.visibility = 'visible';
      document.getElementById('start_again').style.visibility = 'visible';
    }
  };

  refreshIntervalId = setInterval(function() {
    xhttp.open("GET", "/solution", true);
    xhttp.send();
  }, 1000);

  setTimeout(function(){
    clearInterval(refreshIntervalId);
  }, 6000);
}

function checkRadioButtons() {
  if(document.getElementById('manhattan').checked) {
    return manhattan = true;
  } else {
    return manhattan = false;
  }
}

function startAgain() {
  clearInterval(refreshIntervalId);
  location.reload();
}
