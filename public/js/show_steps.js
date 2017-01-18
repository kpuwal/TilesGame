function showSteps() {
  var solution = document.getElementById('solved').value;
  document.getElementById("show_steps").value="Next Step";
  var move = ''
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
  };

  $("div[data-pos='" + move + "']").click()
  step_panel.innerHTML += ' Step: ' + step + ' -> ' + solution[step] + ','
  step++
}
