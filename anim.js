window.onload = body.onload = Init();

function Init() {

  var can = document.getElementById("canvas");
  var image = document.getElementById("img");
  var ctx = can.getContext("2d");

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
