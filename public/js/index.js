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

  setTimeout(function(){ clearInterval(refreshIntervalId); }, 5000);
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

function readStats() {
  var stats = document.getElementById('stats').value;
}


function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
