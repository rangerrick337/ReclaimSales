$(document).ready(function() {
  // 1. Create search button
  var button = document.createElement('button');
  button.className = "btn btn-default";
  button.type = "button";
  button.innerHTML = "search";

  // 2. add button
  var amazonSearch = document.getElementById("amazon-search");
  amazonSearch.appendChild(button);

  // 3. Add event handler
  button.addEventListener ("click", function() {
    alert("did something");
  });

});
