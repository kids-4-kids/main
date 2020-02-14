var prgrph = document.getElementsByClassName("para");
while (true) {
  check();
}

function check() {
  if (prgrph.innerHTML = "") {
    prgrph.id = "isblank";
  }
  else {
    prgrph.id = "_isblank";
  }
}
