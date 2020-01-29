
window.onload = init;
function init() {
  var image = document.getElementById("img")
  var bodyId = document.getElementById("body")
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width;
  var y = 0;
  image.onload = go();

  function go() {
    setInterval(100, animate);
  }
  console.log("success");
  function animate() {
    if (x < canvas.width) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
      ctx.drawImage(image, x, y);                       // draw image at current position
      x += 5;
      go();
    }
    

  }
}
