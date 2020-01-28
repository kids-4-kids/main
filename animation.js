
window.onload = init;
function init() {
  var image = document.getElementById("img")
  var bodyId = document.getElementById("body")
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width;
  var y = 0;

  image.onload = animate;
  console.log("success");
  function animate() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    ctx.drawImage(imgTag, x, y);                       // draw image at current position
    x -= 4;
    if (x > canvas.width) requestAnimationFrame(animate)        // loop Never loop forever other wise u get expelled

  }
}
