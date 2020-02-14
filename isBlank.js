var prgrph = document.getElementByClassName("para");
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
