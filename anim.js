window.onload = body.onload;

body.onload = setup();
function setup() {

  var can = document.getElementById("canvas");
  var image = document.getElementById("img");
  var ctx = can.getContext("2d");
  image.onload = run();
}
function run() {
  var xpos = -image.width;
  move();
  
  function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (image.right < screen.width/2) {
          xpos+=1;
          ctx.drawImage(image, 10, 10, image.width, image.height);
          setTimeout(move, 100);
      }


  }
}
