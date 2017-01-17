function checkRadioButtons() {
  if(document.getElementById('manhattan').checked) {
    manhattan = true;
  } else if(document.getElementById('misplaced').checked) {
    manhattan = false;
  } else {
    alert("Choose heuristic first, please");
  }
}
