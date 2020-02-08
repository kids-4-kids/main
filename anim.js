var can = document.getElementById("canvas");
var image = document.getElementById("img");
var ctx = can.getContext("2d");

var xpos = -image.width;

function move() {

  if (image.right < screen.width/2) {
      xpos+=1;
      image.right = xpos;
      setTimeout(move, 100);
  }
  
  else {
  
  can.style.display = "none";
  }
  
}
