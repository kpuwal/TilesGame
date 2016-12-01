
$("#solve_it").click(function(){
    $.post("/state",
    {
        status: [6,4,7,8,0,5,3,2,1],
        emptyRow: 1,
        emptyCol: 1
    },
    function(status){
        alert("Status: " + "solved :)");
    });
});

function loadSolution() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("panel").innerHTML = this.responseText;
    }
  };

  setTimeout(function() {
    xhttp.open("GET", "/solution", true);
    xhttp.send();
  }, 2700);

}
