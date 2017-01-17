// function calculateSolution(url, callback) {
//
//   var xhttp = new XMLHttpRequest();
//
//   document.getElementById("solve_it").click(function(){
//     checkRadioButtons();
//     $.post("/state", {
//       status: currentStatus,
//       emptyRow: emptytilePosRow,
//       emptyCol: emptytilePosCol,
//       manhattan: manhattan
//     });
//   })
//
//
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("solution_panel").innerHTML = this.responseText;
//     }
//   };
//
//   setTimeout(function() {
//     xhttp.open("GET", "/solution", true);
//     xhttp.send();
//   }, 6000);
//
//   setTimeout(function(){
//     var solution = document.getElementById('solved').value;
//     console.log('path: ' + solution);
//     document.getElementById('show_solution').style.visibility = 'visible';
//
//     $("#show_solution").click(function() {
//       document.addEventListener("DOMContentLoaded", function(event) {
//         showSolution();
//       });
//     });
//   }, 7000);
// }
//
//
//
// function some_function2(url, callback) {
//   var httpRequest; // create our XMLHttpRequest object
//   if (window.XMLHttpRequest) {
//     httpRequest = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     // Internet Explorer is stupid
//     httpRequest = new
//     ActiveXObject("Microsoft.XMLHTTP");
//   }
//
//   httpRequest.onreadystatechange = function() {
//     // inline function to check the status
//     // of our request
//     // this is called on every state change
//     if (httpRequest.readyState === 4 &&
//       httpRequest.status === 200) {
//       callback.call(httpRequest.responseXML);
//       // call the callback function
//     }
//   };
//   httpRequest.open('GET', url);
//   httpRequest.send();
// }
// // call the function
// some_function2("text.xml", function() {
//   console.log(this);
// });
// console.log("this will run before the above callback");
