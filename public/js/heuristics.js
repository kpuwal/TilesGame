var time;

function checkRadioButtons() {
  if(document.getElementById('manhattan').checked) {
    manhattan = true;
    time = 3000;
  }else if(document.getElementById('misplaced').checked) {
    manhattan = false;
    time = 5000;
  } else {
    alert("Choose heuristic first, please");
  }
}
