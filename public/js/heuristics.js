function radioCheck() {
  if(document.getElementById('manhattan').checked) {
    manhattan = true;
    console.log(manhattan);
  }else if(document.getElementById('misplaced').checked) {
    misplaced = true;
    console.log(misplaced);
  } else {
    alert("Choose heuristic first, please");
  }
}
