
/*Fitty*/
let cardTitle = document.getElementsByClassName("card-title");
fitty("card-title");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

let oval = getElementsByClassName("oval");
oval.className = "active";
