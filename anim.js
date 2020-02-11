//Carl. Read this.


/// YOU NEVER MAKE VARIABLES INSIDE A FUNCTION


//dummy func

function dummy() {
  var dummyvar = "ASdasd";
  
}
// now dummyvar will not be recognized ouside the function

window.onload = body.onload;
//you placed the can, ctx and image variables inside the setup function
var can = document.getElementById("canvas");
var image = document.getElementById("img");
var ctx = can.getContext("2d");
////////     :D  XD XD XD XD XD
body.onload = setup();
function setup() {

  
  image.onload = run();
}
var xpos;
function run() {
  xpos = -image.width;
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
