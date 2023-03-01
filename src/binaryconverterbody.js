var bidein = document.getElementById("bidein");

bidein.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("binbut").click()
  }
});

var debiin = document.getElementById("debiin");

debiin.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("denbut").click()
  }
});