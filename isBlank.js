var prgrph = document.getElementsByClassName("para");
check();

function check() {
  if (prgrph.innerHTML = "") {
    prgrph.id = "isblank";
  }
  else {
    prgrph.id = "_isblank";
  }
}
