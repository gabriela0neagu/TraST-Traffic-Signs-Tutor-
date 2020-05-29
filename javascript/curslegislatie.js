function myFunction() {
  var x = document.getElementById("side");
  if (x.className === "side") {
    x.className += " responsive";
  } else {
    x.className = "side";
  }